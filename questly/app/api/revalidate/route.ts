import { NextRequest, NextResponse } from "next/server";
import { invalidateResourcesByPrefix } from "@/app/hooks/useSuspenseResource";

export async function POST(request: NextRequest) {
	const secret = request.headers.get("x-webhook-secret");

	if (!process.env.STRAPI_WEBHOOK_SECRET || secret !== process.env.STRAPI_WEBHOOK_SECRET) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	await invalidateResourcesByPrefix("");

	return NextResponse.json({ ok: true });
}
