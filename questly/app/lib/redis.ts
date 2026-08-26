import { Redis } from "@upstash/redis";

export const redis =
	typeof window === "undefined" && process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
		? new Redis({
				url: process.env.KV_REST_API_URL,
				token: process.env.KV_REST_API_TOKEN
			})
		: null;
