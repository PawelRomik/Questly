"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Filters, SortOption } from "@/app/components/filters/types";
import { useRouter, useSearchParams } from "next/navigation";

type FiltersContextType = {
	filters: Filters;
	setFilters: (filters: Filters) => void;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [filters, setFilters] = useState<Filters>({
		search: searchParams.get("search") ?? "",
		groupByType: searchParams.get("groupByType") === "true",
		sort: (searchParams.get("sort") as SortOption) ?? SortOption.AZ,
		searchTags: searchParams.get("searchTags") === "true",
		groupByLocation: searchParams.get("groupByLocation") === "true"
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			const current = searchParams.toString();

			const params = new URLSearchParams(searchParams.toString());

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

			const next = params.toString();

			if (current !== next) {
				router.replace(`?${next}`);
			}
		}, 300);

		return () => clearTimeout(timeout);
	}, [filters, router, searchParams]);

	return <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>;
}

export function useFilters() {
	const context = useContext(FiltersContext);
	if (!context) {
		throw new Error("useFilters must be used within FiltersProvider");
	}
	return context;
}
