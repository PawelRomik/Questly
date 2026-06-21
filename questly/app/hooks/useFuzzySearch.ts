import { useMemo } from "react";
import Fuse from "fuse.js";

type UseFuzzySearchOptions<T> = {
	items: T[];
	search: string;
	keys: string[];
	extraMatches?: (item: T, search: string) => boolean | undefined;
};

export function useFuzzySearch<T>({ items, search, keys, extraMatches }: UseFuzzySearchOptions<T>) {
	return useMemo(() => {
		const term = search.trim();

		if (!term) {
			return items;
		}

		const fuse = new Fuse(items, {
			keys,
			threshold: 0.2,
			ignoreLocation: true,
			minMatchCharLength: 1
		});

		const fuzzyResults = fuse.search(term).map((r) => r.item);

		if (!extraMatches) {
			return fuzzyResults;
		}

		const additionalResults = items.filter((item) => extraMatches(item, term.toLowerCase()));

		return [...new Set([...fuzzyResults, ...additionalResults])];
	}, [items, search, keys, extraMatches]);
}
