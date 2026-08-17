import { DocumentNode } from "@apollo/client";
import { client } from "@/app/lib/apollo";
import { useMemo } from "react";
import fetchAllPages from "@/app/lib/utils/fetchAllPages";

type LocalizedListOptions<T, TVars> = {
	locale: string;
	defaultLocale?: string;
	query: DocumentNode;
	vars: TVars;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
	getId: (item: T) => string;
	pageSize?: number;
};

type CacheEntry<T> = {
	status: "pending" | "success" | "error";
	promise: Promise<void>;
	data?: T;
	error?: unknown;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resourceCache = new Map<string, CacheEntry<any>>();

function useSuspenseResource<T>(key: string, fetcher: () => Promise<T>): T {
	let entry = resourceCache.get(key) as CacheEntry<T> | undefined;

	if (!entry) {
		const promise = fetcher()
			.then((data) => {
				entry!.status = "success";
				entry!.data = data;
			})
			.catch((error) => {
				entry!.status = "error";
				entry!.error = error;
			});

		entry = { status: "pending", promise };
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

export function useLocalizedList<T, TVars>({ locale, defaultLocale = "en", query, vars, getItems, getId, pageSize = 10 }: LocalizedListOptions<T, TVars>) {
	const cacheKey = useMemo(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const queryName = (query as any).definitions?.[0]?.name?.value ?? "query";
		return `${queryName}:${JSON.stringify(vars)}:${locale}:${defaultLocale}:${pageSize}`;
	}, [query, vars, locale, defaultLocale, pageSize]);

	return useSuspenseResource(cacheKey, async () => {
		const localized = await fetchAllPages({ client, query, vars, locale, getItems, pageSize });

		if (locale === defaultLocale) {
			return localized;
		}

		const fallback = await fetchAllPages({
			client,
			query,
			vars,
			locale: defaultLocale,
			getItems,
			pageSize
		});

		const localizedIds = new Set(localized.map(getId));
		return [...localized, ...fallback.filter((item) => !localizedIds.has(getId(item)))];
	});
}
