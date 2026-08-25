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

const DEFAULT_TTL_MS = 5 * 60 * 1000;

export function useSuspenseResource<T>(key: string, fetcher: () => Promise<T>, ttlMs: number = DEFAULT_TTL_MS): T {
	let entry = resourceCache.get(key) as CacheEntry<T> | undefined;

	const isExpired = !!entry && entry.status !== "pending" && Date.now() > entry.expiresAt;

	if (!entry || isExpired) {
		const promise = fetcher()
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

export function invalidateResource(key: string) {
	resourceCache.delete(key);
}

export function invalidateResourcesByPrefix(prefix: string) {
	for (const key of resourceCache.keys()) {
		if (key.startsWith(prefix)) {
			resourceCache.delete(key);
		}
	}
}
