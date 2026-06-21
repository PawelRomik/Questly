import { useApollo } from "@/app/hooks/useApollo";
import { DocumentNode } from "@apollo/client";
import { useMemo } from "react";

type LocalizedListOptions<T, TVars> = {
	locale: string;
	defaultLocale?: string;
	query: DocumentNode;
	vars: TVars;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
	getId: (item: T) => string;
};

export function useLocalizedList<T, TVars>({ locale, defaultLocale = "en", query, vars, getItems, getId }: LocalizedListOptions<T, TVars>) {
	const { data: localizedData } = useApollo(query, {
		...vars,
		locale
	});

	const { data: fallbackData } = useApollo(query, {
		...vars,
		locale: defaultLocale
	});

	return useMemo(() => {
		const localized = getItems(localizedData);

		if (locale === defaultLocale) {
			return localized;
		}

		const fallback = getItems(fallbackData);

		const localizedIds = new Set(localized.map(getId));

		return [...localized, ...fallback.filter((item) => !localizedIds.has(getId(item)))];
	}, [localizedData, fallbackData, locale, defaultLocale, getItems, getId]);
}
