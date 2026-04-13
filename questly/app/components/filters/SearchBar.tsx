"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { Checkbox } from "./Checkbox";
import { SortSelect } from "./SortSelect";
import { Filters } from "./types";
import { useDebounce } from "@/app/lib/utils/useDebounce";
import { useFilters } from "@/app/context/FiltersContext";
import { formatName } from "@/app/lib/utils/formatName";
import { GAME_THEME } from "@/app/data/games";
import Image from "next/image";

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

	const game = GAME_THEME[params.game as keyof typeof GAME_THEME] ?? GAME_THEME.default;

	return (
		<div className='w-full mt-30 mx-auto flex flex-col gap-3 px-3'>
			<div className='flex h-20 items-center mb-3 justify-start '>
				<Image src={game.logo} alt={game.name} className='object-contain h-full' />
				<h2 className='text-white font-bold text-4xl text-center '>
					{formatName(game.name)} {formatName(section)}
				</h2>
			</div>
			<ul className='text-white flex flex-col gap-2 items-start justify-center'>
				{/*TODO*/}
				<li className='flex items-center gap-2'>
					<span className='w-2 h-2 bg-red-600 rounded-full'></span>
					Quests: <span className='bg-zinc-900 border border-zinc-800 px-3'>0/13</span>
					<button className='bg-red-600 px-2 text-white font-bold cursor-pointer hover:scale-105 transition hover:bg-red-500'>Reset</button>
				</li>
				<li className='flex items-center gap-2'>
					<span className='w-2 h-2 bg-red-600 rounded-full'></span>
					Achievements: <span className='bg-zinc-900 border border-zinc-800 px-3'>0/13</span>
					<button className='bg-red-600 px-2 text-white font-bold cursor-pointer hover:scale-105 transition hover:bg-red-500 '>Reset</button>
				</li>
				<li className='flex items-center gap-2'>
					<span className='w-2 h-2 bg-red-600 rounded-full'></span>
					Collectibles: <span className='bg-zinc-900 border border-zinc-800 px-3'>0/13</span>
					<button className='bg-red-600 px-2 text-white font-bold cursor-pointer hover:scale-105 transition hover:bg-red-500 '>Reset</button>
				</li>
				<li className='flex items-center gap-2'>
					<span className='w-2 h-2 bg-red-600 rounded-full'></span>
					Map Markers: <span className='bg-zinc-900 border border-zinc-800 px-3'>0/13</span>
					<button className='bg-red-600 px-2 text-white font-bold cursor-pointer hover:scale-105 transition hover:bg-red-500 '>Reset</button>
				</li>
			</ul>
			<SearchInput value={filters.search} onChange={(v) => update("search", v)} />
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
