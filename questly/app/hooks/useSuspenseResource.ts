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

const DEFAULT_TTL_MS = 60 * 60 * 1000;

const NAMESPACE = "data:";

function namespacedKey(key: string) {
	return `${NAMESPACE}${key}`;
}

async function getServerRedis() {
	if (typeof window !== "undefined") {
		return null;
	}

	const { redis } = await import("@/app/lib/redis");
	return redis;
}

async function readThroughRedis<T>(key: string, ttlMs: number, fetcher: () => Promise<T>): Promise<T> {
	const redis = await getServerRedis();

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
	const cacheKey = namespacedKey(key);

	let entry = resourceCache.get(cacheKey) as CacheEntry<T> | undefined;

	const isExpired = !!entry && entry.status !== "pending" && Date.now() > entry.expiresAt;

	if (!entry || isExpired) {
		const promise = readThroughRedis(cacheKey, ttlMs, fetcher)
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
		resourceCache.set(cacheKey, entry);
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
	const cacheKey = namespacedKey(key);

	resourceCache.delete(cacheKey);

	const redis = await getServerRedis();

	if (redis) {
		try {
			await redis.del(cacheKey);
		} catch {}
	}
}

export async function invalidateResourcesByPrefix(prefix: string) {
	const namespacedPrefix = namespacedKey(prefix);

	for (const key of resourceCache.keys()) {
		if (key.startsWith(namespacedPrefix)) {
			resourceCache.delete(key);
		}
	}

	const redis = await getServerRedis();

	if (redis) {
		try {
			const keys = await redis.keys(`${namespacedPrefix}*`);
			if (keys.length) {
				await redis.del(...keys);
			}
		} catch {}
	}
}
