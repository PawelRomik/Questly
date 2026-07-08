import { useMemo } from "react";
import Fuse from "fuse.js";
import { useTranslations } from "next-intl";
type FuzzyMatch = readonly [number, number][];

export type FuzzySearchItem<T> = T & {
	_titleMatch?: FuzzyMatch;
};

type UseFuzzySearchOptions<T> = {
	items: T[];
	search: string;
	keys: string[];
	getId: (item: T) => string;
	extraMatches?: (item: T, search: string) => boolean | undefined;
};

export function getMissableIndices(search: string, missableFuse: Fuse<{ value: string }>) {
	const result = missableFuse.search(search)[0];

	return result?.matches?.[0]?.indices ?? [];
}

type SearchableItem = {
	uuid: string;
	missable?: boolean;
};

export function useFuzzySearch<T extends SearchableItem>({ items, search, getId, keys, extraMatches }: UseFuzzySearchOptions<T>): FuzzySearchItem<T>[] {
	const t = useTranslations("tags");

	const missableFuse = useMemo(
		() =>
			new Fuse([{ value: t("missable") }], {
				keys: ["value"],
				threshold: 0.3,
				includeMatches: true,
				ignoreLocation: true
			}),
		[t]
	);

	return useMemo(() => {
		const term = search.trim();

		if (!term) {
			return items as FuzzySearchItem<T>[];
		}

		const fuse = new Fuse(items, {
			keys,
			threshold: 0.2,
			ignoreLocation: true,
			minMatchCharLength: 1,
			includeMatches: true
		});

		const fuzzyResults = fuse.search(term).map((result) => {
			const tagMatch = result.matches?.find((match) => match.key === "tags.name");
			return {
				...result.item,
				_titleMatch: result.matches?.find((m) => m.key === "title")?.indices,
				_tagMatchValue: tagMatch?.value,
				_tagMatchIndices: tagMatch?.indices,
				_dlcMatch: result.matches?.find((m) => m.key === "dlc.title")?.indices
			};
		});

		if (!extraMatches) {
			return fuzzyResults;
		}

		const additionalResults = items
			.filter((item) => {
				if (!item.missable) return false;

				const searchTerm = term.toLowerCase();

				return t("missable").toLowerCase().includes(searchTerm) || searchTerm.includes(t("missable").toLowerCase().slice(0, 3));
			})
			.map((item) => ({
				...item,
				_missableMatch: getMissableIndices(term, missableFuse)
			}));

		return [...new Map([...fuzzyResults, ...additionalResults].map((item) => [getId(item), item])).values()];
	}, [items, search, keys, t, extraMatches, getId, missableFuse]);
}
