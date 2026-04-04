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
			const params = new URLSearchParams();

			if (filters.search) params.set("search", filters.search);
			if (filters.groupByType) params.set("groupByType", "true");
			if (filters.groupByLocation) params.set("groupByLocation", "true");
			if (filters.sort) params.set("sort", filters.sort);
			if (filters.searchTags) params.set("searchTags", "true");

			router.replace(`?${params.toString()}`);
		}, 300);

		return () => clearTimeout(timeout);
	}, [filters, router]);

	return <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>;
}

export function useFilters() {
	const context = useContext(FiltersContext);
	if (!context) {
		throw new Error("useFilters must be used within FiltersProvider");
	}
	return context;
}
