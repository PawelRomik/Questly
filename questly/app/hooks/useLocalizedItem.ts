import { DocumentNode } from "@apollo/client";
import { getClient } from "@/app/lib/apollo";
import { useMemo } from "react";
import { useSuspenseResource } from "@/app/hooks/useSuspenseResource";

type LocalizedItemOptions<T, TVars> = {
	locale: string;
	defaultLocale?: string;
	query: DocumentNode;
	vars: TVars;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
};

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
	const { data } = await getClient().query({
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
