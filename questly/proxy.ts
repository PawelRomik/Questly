import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const intlMiddleware = createMiddleware(routing);

const redis =
	process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
		? new Redis({
				url: process.env.KV_REST_API_URL,
				token: process.env.KV_REST_API_TOKEN
			})
		: null;

const ratelimit = redis
	? new Ratelimit({
			redis,
			limiter: Ratelimit.slidingWindow(60, "1 m"),
			analytics: false,
			prefix: "ratelimit"
		})
	: null;

export default async function proxy(request: NextRequest) {
	if (ratelimit) {
		const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";

		const { success, limit, remaining, reset } = await ratelimit.limit(ip);

		if (!success) {
			return new NextResponse("Too many requests", {
				status: 429,
				headers: {
					"X-RateLimit-Limit": limit.toString(),
					"X-RateLimit-Remaining": remaining.toString(),
					"X-RateLimit-Reset": reset.toString(),
					"Retry-After": Math.ceil((reset - Date.now()) / 1000).toString()
				}
			});
		}
	}

	return intlMiddleware(request);
}

export const config = {
	matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
};
