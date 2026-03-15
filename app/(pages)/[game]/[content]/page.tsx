"use client";
import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
import SearchBar from "@/app/components/searchbar/SearchBar";
import { useState } from "react";

export default function Game() {
	const [search, setSearch] = useState("");
	const [groupByType, setGroupByType] = useState(true);
	const [sort, setSort] = useState("az");
	const [searchTags, setSearchTags] = useState(true);
	return (
		<div className='flex flex-col gap-5 h-screen overflow-y-scroll  bg-[repeating-linear-gradient(0deg,#09090b,#09090b_4px,#18181b_4px,#18181b_40px)]'>
			<Navbar />
			<SearchBar
				search={search}
				setSearch={setSearch}
				groupByType={groupByType}
				setGroupByType={setGroupByType}
				sort={sort}
				setSort={setSort}
				searchTags={searchTags}
				setSearchTags={setSearchTags}
			/>

			<QuestList search={search} groupByType={groupByType} sort={sort} searchTags={searchTags} />
		</div>
	);
}
