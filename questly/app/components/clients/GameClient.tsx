"use client";

import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
import { SearchBar } from "@/app/components/filters/SearchBar";
import { useState, useCallback, useEffect } from "react";
import { Filters, SortOption } from "@/app/components/filters/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function GameClient() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [filters, setFilters] = useState<Filters>({
		search: searchParams.get("search") ?? "",
		groupByType: searchParams.get("groupByType") === "true",
		sort: (searchParams.get("sort") as SortOption) ?? SortOption.AZ,
		searchTags: searchParams.get("searchTags") === "true"
	});

	const handleFiltersChange = useCallback((next: Filters) => {
		setFilters(next);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const params = new URLSearchParams();

			if (filters.search) params.set("search", filters.search);

			params.set("groupByType", String(filters.groupByType));
			params.set("sort", filters.sort);
			params.set("searchTags", String(filters.searchTags));

			router.replace(`?${params.toString()}`);
		}, 300);

		return () => clearTimeout(timeout);
	}, [filters, router]);

	return (
		<div className='flex flex-col gap-5 h-screen overflow-y-scroll bg-[repeating-linear-gradient(0deg,#09090b,#09090b_4px,#18181b_4px,#18181b_40px)]'>
			<Navbar />

			<SearchBar initialFilters={filters} onFiltersChange={handleFiltersChange} />

			<QuestList {...filters} />
		</div>
	);
}
