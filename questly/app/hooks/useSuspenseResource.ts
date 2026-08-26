import { redis } from "@/app/lib/redis";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CacheEntry<T = any> = {
	status: "pending" | "success" | "error";
	promise: Promise<void>;
	data?: T;
	error?: unknown;
	expiresAt: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resourceCache = new Map<string, CacheEntry<any>>();

const DEFAULT_TTL_MS = 5 * 60 * 1000; // 5 minut

async function readThroughRedis<T>(key: string, ttlMs: number, fetcher: () => Promise<T>): Promise<T> {
	if (redis) {
		try {
			const cached = await redis.get<T>(key);

			if (cached !== null && cached !== undefined) {
				return cached;
			}
		} catch {}
	}

	const data = await fetcher();

	if (redis) {
		try {
			await redis.set(key, data, { px: ttlMs });
		} catch {}
	}

	return data;
}

export function useSuspenseResource<T>(key: string, fetcher: () => Promise<T>, ttlMs: number = DEFAULT_TTL_MS): T {
	let entry = resourceCache.get(key) as CacheEntry<T> | undefined;

	const isExpired = !!entry && entry.status !== "pending" && Date.now() > entry.expiresAt;

	if (!entry || isExpired) {
		const promise = readThroughRedis(key, ttlMs, fetcher)
			.then((data) => {
				entry!.status = "success";
				entry!.data = data;
				entry!.expiresAt = Date.now() + ttlMs;
			})
			.catch((error) => {
				entry!.status = "error";
				entry!.error = error;

				entry!.expiresAt = Date.now() + Math.min(ttlMs, 10_000);
			});

		entry = { status: "pending", promise, expiresAt: Infinity };
		resourceCache.set(key, entry);
	}

	if (entry.status === "pending") {
		throw entry.promise;
	}

	if (entry.status === "error") {
		throw entry.error;
	}

	return entry.data as T;
}

export async function invalidateResource(key: string) {
	resourceCache.delete(key);

	if (redis) {
		try {
			await redis.del(key);
		} catch {}
	}
}

export async function invalidateResourcesByPrefix(prefix: string) {
	for (const key of resourceCache.keys()) {
		if (key.startsWith(prefix)) {
			resourceCache.delete(key);
		}
	}

	if (redis) {
		try {
			const keys = await redis.keys(`${prefix}*`);
			if (keys.length) {
				await redis.del(...keys);
			}
		} catch {}
	}
}
