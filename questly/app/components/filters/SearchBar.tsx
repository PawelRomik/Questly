"use client";

import { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput";
import { Checkbox } from "./Checkbox";
import { SortSelect } from "./SortSelect";
import { Filters, SortOption } from "./types";
import { useDebounce } from "@/app/lib/utils/useDebounce";

type Props = {
	onFiltersChange?: (filters: Filters) => void;
	initialFilters?: Filters;
};

export function SearchBar({ onFiltersChange, initialFilters }: Props) {
	const [filters, setFilters] = useState<Filters>(
		initialFilters ?? {
			search: "",
			groupByType: false,
			sort: SortOption.AZ,
			searchTags: false,
			groupByLocation: false
		}
	);

	const debouncedSearch = useDebounce(filters.search, 300);

	const { groupByType, sort, searchTags, groupByLocation } = filters;

	useEffect(() => {
		if (!onFiltersChange) return;

		onFiltersChange({
			groupByType,
			sort,
			searchTags,
			groupByLocation,
			search: debouncedSearch
		});
	}, [debouncedSearch, groupByType, groupByLocation, sort, searchTags, onFiltersChange]);

	const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
		setFilters((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<div className='w-full max-w-xl m-auto flex flex-col gap-3 px-3'>
			<SearchInput value={filters.search} onChange={(v) => update("search", v)} />

			<div className='flex justify-between items-center'>
				<Checkbox label='Group by type' checked={filters.groupByType} onChange={(v) => update("groupByType", v)} />

				<Checkbox label='Search in tags' checked={filters.searchTags} onChange={(v) => update("searchTags", v)} />
				<Checkbox label='Group by location' checked={filters.groupByLocation} onChange={(v) => update("groupByLocation", v)} />
				<SortSelect value={filters.sort} onChange={(v) => update("sort", v)} />
			</div>
		</div>
	);
}
