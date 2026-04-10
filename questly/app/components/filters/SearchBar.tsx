"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { Checkbox } from "./Checkbox";
import { SortSelect } from "./SortSelect";
import { Filters } from "./types";
import { useDebounce } from "@/app/lib/utils/useDebounce";
import { useFilters } from "@/app/context/FiltersContext";

export function SearchBar() {
	const { filters: globalFilters, setFilters } = useFilters();
	const params = useParams();

	const section = params.content as string;
	const isQuestPage = section === "quests";

	const [filters, setLocalFilters] = useState<Filters>(globalFilters);
	const debouncedSearch = useDebounce(filters.search, 300);

	const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
		setLocalFilters((prev) => ({ ...prev, [key]: value }));
	};

	useEffect(() => {
		setFilters({
			groupByType: filters.groupByType,
			sort: filters.sort,
			searchTags: filters.searchTags,
			groupByLocation: filters.groupByLocation,
			search: debouncedSearch
		});
	}, [debouncedSearch, filters.groupByType, filters.groupByLocation, filters.sort, filters.searchTags, setFilters]);

	return (
		<div className='w-full mt-30 mx-auto flex flex-col gap-3 px-3'>
			{/* 🔍 ZAWSZE widoczny */}
			<SearchInput value={filters.search} onChange={(v) => update("search", v)} />

			{/* 🔥 TYLKO dla questów */}
			{isQuestPage && (
				<div className='flex justify-between items-center'>
					<Checkbox label='Group by type' checked={filters.groupByType} onChange={(v) => update("groupByType", v)} />

					<Checkbox label='Search in tags' checked={filters.searchTags} onChange={(v) => update("searchTags", v)} />

					<Checkbox label='Group by location' checked={filters.groupByLocation} onChange={(v) => update("groupByLocation", v)} />

					<SortSelect value={filters.sort} onChange={(v) => update("sort", v)} />
				</div>
			)}
		</div>
	);
}
