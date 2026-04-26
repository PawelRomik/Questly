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
import logo from "../../../public/assets/witcher3logo.webp";
import geralt from "../../../public/assets/geralt.webp";
import Image from "next/image";

export function SearchBar() {
	const { filters: globalFilters, setFilters } = useFilters();
	const params = useParams();

	const section = params.content as string;
	const isQuestPage = section === "quests";

	const [filters, setLocalFilters] = useState<Filters>(globalFilters);
	const isLocked = filters.groupByQuestGroup;
	const debouncedSearch = useDebounce(filters.search, 300);

	const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
		setLocalFilters((prev) => ({ ...prev, [key]: value }));
	};

	useEffect(() => {
		setFilters({
			groupByType: filters.groupByType,
			sort: filters.sort,
			groupByAct: filters.groupByAct,
			groupByQuestGroup: filters.groupByQuestGroup,
			searchTags: filters.searchTags,
			groupByLocation: filters.groupByLocation,
			search: debouncedSearch
		});
	}, [debouncedSearch, filters.groupByType, filters.groupByAct, filters.groupByQuestGroup, filters.groupByLocation, filters.sort, filters.searchTags, setFilters]);

	const game = GAME_THEME[params.game as keyof typeof GAME_THEME] ?? GAME_THEME.default;

	return (
		<div className='w-full mt-30 mx-auto flex flex-col gap-5 px-3'>
			{/* HEADER */}
			<div className='flex items-center gap-4 relative  bg-linear-to-r  px-4 py-3 '>
				<Image src={logo} alt={game.name} className='object-contain h-30' />
			</div>

			{/* SEARCH */}
			<div className='border border-[rgb(40,37,28)] bg-black/40 relative p-3 w-full'>
				<Image src={geralt} alt={game.name} className='object-contain absolute bottom-full opacity-60  w-30' />
				<SearchInput theme={game.borderAlt} value={filters.search} onChange={(v) => update("search", v)} />
			</div>

			{/* FILTERS */}
			{isQuestPage && (
				<div className='flex flex-wrap gap-4 items-center border border-[rgb(40,37,28)] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-4'>
					<Checkbox
						theme={{ border: game.borderAlt, color: game.secondColor }}
						label='Group by type'
						checked={filters.groupByType}
						disabled={isLocked}
						onChange={(v) => update("groupByType", v)}
					/>

					<Checkbox theme={{ border: game.borderAlt, color: game.secondColor }} label='Search in tags' checked={filters.searchTags} onChange={(v) => update("searchTags", v)} />

					<Checkbox
						theme={{ border: game.borderAlt, color: game.secondColor }}
						label='Group by quest group'
						checked={filters.groupByQuestGroup}
						onChange={(v) => update("groupByQuestGroup", v)}
					/>

					<Checkbox
						theme={{ border: game.borderAlt, color: game.secondColor }}
						label='Group by act'
						checked={filters.groupByAct}
						disabled={isLocked}
						onChange={(v) => update("groupByAct", v)}
					/>

					<Checkbox
						disabled={isLocked}
						theme={{ border: game.borderAlt, color: game.secondColor }}
						label='Group by location'
						checked={filters.groupByLocation}
						onChange={(v) => update("groupByLocation", v)}
					/>

					<SortSelect theme={game.borderAlt} value={filters.sort} onChange={(v) => update("sort", v)} />
				</div>
			)}
			{/* STATS */}
			<ul className='flex flex-col gap-2 text-sm'>
				{[{ label: "Quests" }, { label: "Achievements" }, { label: "Collectibles" }, { label: "Map Markers" }].map((item) => (
					<li key={item.label} className='flex items-center justify-between gap-2 px-3 py-2 border border-[rgb(40,37,28)] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]'>
						<div className='flex items-center gap-2'>
							<span className='w-2 h-2 bg-[#a68b5b] rounded-full' />
							<span className='text-[#e6d3a3] uppercase tracking-wide'>{item.label}</span>
						</div>

						<div className='flex items-center gap-3'>
							<span className='px-3 py-1 text-xs border border-[rgb(40,37,28)] bg-black/40 text-[#cfc6a4]'>0/13</span>

							<button
								className='
                  px-3 py-1 text-xs uppercase tracking-wide
                  border border-[#6b1f1f]
                  bg-gradient-to-b from-[#3a0d0d] to-[#1a0505]
                  text-[#f0d9a7]
				  cursor-pointer
                  hover:border-[#a33]
                  hover:from-[#5a1414] hover:to-[#2a0a0a]
                  transition
                '
							>
								Reset
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
