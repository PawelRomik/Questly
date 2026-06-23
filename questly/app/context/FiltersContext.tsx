"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Filters, MissableOption, SortOption } from "@/app/components/filters/types";
import { useParams, useRouter, useSearchParams } from "next/navigation";

type FiltersContextType = {
	filters: Filters;
	setFilters: React.Dispatch<React.SetStateAction<Filters>>;

	sidebarOpen: boolean;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const params = useParams();
	const { game, content } = params;

	const searchParams = useSearchParams();

	const [filters, setFilters] = useState<Filters>({
		search: searchParams.get("search") ?? "",

		groupByType: searchParams.get("groupByType") === "true",

		sort: (searchParams.get("sort") as SortOption) ?? SortOption.AZ,

		searchTags: searchParams.get("searchTags") === "true",

		searchItems: searchParams.get("searchItems") === "true",

		groupByLocation: searchParams.get("groupByLocation") === "true",

		groupByAct: searchParams.get("groupByAct") === "true",

		groupByQuestGroup: searchParams.get("groupByQuestGroup") === "true",

		missables: (searchParams.get("missables") as MissableOption) ?? MissableOption.DEFAULT
	});

	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const current = searchParams.toString();

			const params = new URLSearchParams(searchParams.toString());

			if (filters.groupByAct) params.set("groupByAct", "true");
			else params.delete("groupByAct");

			if (filters.searchItems) params.set("searchItems", "true");
			else params.delete("searchItems");

			if (filters.groupByQuestGroup) params.set("groupByQuestGroup", "true");
			else params.delete("groupByQuestGroup");

			if (filters.search) params.set("search", filters.search);
			else params.delete("search");

			if (filters.groupByType) params.set("groupByType", "true");
			else params.delete("groupByType");

			if (filters.groupByLocation) params.set("groupByLocation", "true");
			else params.delete("groupByLocation");

			if (filters.sort) params.set("sort", filters.sort);
			else params.delete("sort");

			if (filters.searchTags) params.set("searchTags", "true");
			else params.delete("searchTags");

			if (filters.missables !== MissableOption.DEFAULT) params.set("missables", filters.missables);
			else params.delete("missables");

			const next = params.toString();

			if (current !== next) {
				router.replace(`?${next}`);
			}
		}, 300);

		return () => clearTimeout(timeout);
	}, [filters, router, searchParams]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setFilters({
				search: "",

				groupByType: false,

				sort: SortOption.AZ,

				searchTags: false,

				groupByLocation: false,

				groupByAct: false,

				groupByQuestGroup: false,

				searchItems: false,

				missables: MissableOption.DEFAULT
			});
		});

		return () => clearTimeout(timeout);
	}, [game, content]);

	return (
		<FiltersContext.Provider
			value={{
				filters,
				setFilters,

				sidebarOpen,
				setSidebarOpen
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
}

export function useFilters() {
	const context = useContext(FiltersContext);

	if (!context) {
		throw new Error("useFilters must be used within FiltersProvider");
	}

	return context;
}
