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
const L1_TTL_MS = 10 * 60 * 1000; // 10 minut

const DEFAULT_L2_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 dni

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

function ensureEntry<T>(cacheKey: string, fetcher: () => Promise<T>, l2TtlMs: number): CacheEntry<T> {
	let entry = resourceCache.get(cacheKey) as CacheEntry<T> | undefined;

	const isExpired = !!entry && entry.status !== "pending" && Date.now() > entry.expiresAt;

	if (!entry || isExpired) {
		const promise = readThroughRedis(cacheKey, l2TtlMs, fetcher)
			.then((data) => {
				entry!.status = "success";
				entry!.data = data;
				entry!.expiresAt = Date.now() + L1_TTL_MS;
			})
			.catch((error) => {
				entry!.status = "error";
				entry!.error = error;
				entry!.expiresAt = Date.now() + Math.min(L1_TTL_MS, 10_000);
			});

		entry = { status: "pending", promise, expiresAt: Infinity };
		resourceCache.set(cacheKey, entry);
	}

	return entry;
}

export function useSuspenseResource<T>(key: string, fetcher: () => Promise<T>, l2TtlMs: number = DEFAULT_L2_TTL_MS): T {
	const entry = ensureEntry<T>(namespacedKey(key), fetcher, l2TtlMs);

	if (entry.status === "pending") {
		throw entry.promise;
	}

	if (entry.status === "error") {
		throw entry.error;
	}

	return entry.data as T;
}

export async function getCachedResource<T>(key: string, fetcher: () => Promise<T>, l2TtlMs: number = DEFAULT_L2_TTL_MS): Promise<T> {
	const entry = ensureEntry<T>(namespacedKey(key), fetcher, l2TtlMs);

	await entry.promise;

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
