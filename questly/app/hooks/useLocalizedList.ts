import { DocumentNode } from "@apollo/client";
import { getClient } from "@/app/lib/apollo";
import { useMemo } from "react";
import fetchAllPages from "@/app/lib/utils/fetchAllPages";
import { useSuspenseResource } from "@/app/hooks/useSuspenseResource";

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

export function useLocalizedList<T, TVars>({ locale, defaultLocale = "en", query, vars, getItems, getId, pageSize = 10 }: LocalizedListOptions<T, TVars>) {
	const cacheKey = useMemo(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const queryName = (query as any).definitions?.[0]?.name?.value ?? "query";
		return `${queryName}:${JSON.stringify(vars)}:${locale}:${defaultLocale}:${pageSize}`;
	}, [query, vars, locale, defaultLocale, pageSize]);

	return useSuspenseResource(cacheKey, async () => {
		const localized = await fetchAllPages({ client: getClient(), query, vars, locale, getItems, pageSize });

		if (locale === defaultLocale) {
			return localized;
		}

		const fallback = await fetchAllPages({
			client: getClient(),
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
