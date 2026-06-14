import { extractList } from "@/app/hooks/extractList";
import { useApollo } from "@/app/hooks/useApollo";
import { DocumentNode } from "@apollo/client";
import { useMemo } from "react";

type FallbackOptions<T, TVars> = {
	locale: string;
	defaultLocale?: string;
	query: DocumentNode;
	vars: TVars;
	dataKey: string;
	getId: (item: T) => string;
};

export function useLocalizedList<T, TVars>({ locale, defaultLocale = "en", query, vars, dataKey, getId }: FallbackOptions<T, TVars>) {
	const { data: localizedData } = useApollo(query, {
		...vars,
		locale
	});

	const { data: fallbackData } = useApollo(query, {
		...vars,
		locale: defaultLocale
	});

	return useMemo(() => {
		const localized = extractList<T>(localizedData, dataKey);

		if (locale === defaultLocale) {
			return localized;
		}

		const fallback = extractList<T>(fallbackData, dataKey);

		const localizedIds = new Set(localized.map(getId));

		return [...localized, ...fallback.filter((item) => !localizedIds.has(getId(item)))];
	}, [localizedData, fallbackData, locale, defaultLocale, dataKey, getId]);
}
