import { fetchApollo } from "@/app/hooks/fetchApollo";
import { DocumentNode } from "@apollo/client";

type LocalizedListOptions<T, TVars> = {
	locale: string;
	defaultLocale?: string;
	query: DocumentNode;
	vars: TVars;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
	getId: (item: T) => string;
};

export async function getLocalizedList<T, TVars>({ locale, defaultLocale = "en", query, vars, getItems, getId }: LocalizedListOptions<T, TVars>): Promise<T[]> {
	const { data: localizedData } = await fetchApollo(query, {
		...vars,
		locale
	});

	if (locale === defaultLocale) {
		return getItems(localizedData);
	}

	const { data: fallbackData } = await fetchApollo(query, {
		...vars,
		locale: defaultLocale
	});

	const localized = getItems(localizedData);
	const fallback = getItems(fallbackData);

	const localizedIds = new Set(localized.map(getId));

	return [...localized, ...fallback.filter((item) => !localizedIds.has(getId(item)))];
}
