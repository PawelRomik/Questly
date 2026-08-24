import { DocumentNode } from "@apollo/client";
import { client } from "@/app/lib/apollo";
import { useMemo } from "react";

type LocalizedItemOptions<T, TVars> = {
	locale: string;
	defaultLocale?: string;
	query: DocumentNode;
	vars: TVars;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
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

async function fetchLocalizedItem<T, TVars>({
	query,
	vars,
	locale,
	getItems
}: {
	query: DocumentNode;
	vars: TVars;
	locale: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
}): Promise<T | undefined> {
	const { data } = await client.query({
		query,
		variables: { ...vars, locale },
		fetchPolicy: "network-only"
	});

	return getItems(data)[0];
}

export function useLocalizedItem<T, TVars>({ locale, defaultLocale = "en", query, vars, getItems }: LocalizedItemOptions<T, TVars>): T | undefined {
	const cacheKey = useMemo(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const queryName = (query as any).definitions?.[0]?.name?.value ?? "query";
		return `item:${queryName}:${JSON.stringify(vars)}:${locale}:${defaultLocale}`;
	}, [query, vars, locale, defaultLocale]);

	return useSuspenseResource(cacheKey, async () => {
		const localized = await fetchLocalizedItem({ query, vars, locale, getItems });

		if (localized || locale === defaultLocale) {
			return localized;
		}

		return fetchLocalizedItem({ query, vars, locale: defaultLocale, getItems });
	});
}
