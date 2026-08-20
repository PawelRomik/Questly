"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { CompletedMarkersOption, CompletedOption, Filters, HiddenAchievementsOption, MissableOption, SortOption } from "@/app/components/filters/types";
import { useParams } from "next/navigation";

type FiltersContextType = {
	filters: Filters;
	setFilters: React.Dispatch<React.SetStateAction<Filters>>;

	sidebarOpen: boolean;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

const DEFAULT_FILTERS: Filters = {
	search: "",
	completed: CompletedOption.DEFAULT,
	dlc: "all",
	mapLocation: "none",
	completedMarkers: CompletedMarkersOption.SHOW,
	mapMarkers: [],
	groupByType: true,
	hiddenAchievements: HiddenAchievementsOption.HIDE,
	sort: SortOption.LEVEL_ASC,
	searchTags: false,
	searchItems: false,
	groupByLocation: true,
	groupByAct: false,
	groupByQuestGroup: false,
	missables: MissableOption.DEFAULT
};

const QUEST_FILTER_KEYS = [
	"groupByType",
	"groupByLocation",
	"groupByQuestGroup",
	"groupByAct",
	"searchTags",
	"missables",
	"sort",
	"completed",
	"dlc"
] as const satisfies readonly (keyof Filters)[];

const ACHIEVEMENT_FILTER_KEYS = ["searchTags", "groupByQuestGroup", "missables", "sort", "hiddenAchievements", "completed", "dlc"] as const satisfies readonly (keyof Filters)[];

const COLLECTION_FILTER_KEYS = ["searchItems", "missables", "completed", "dlc", "sort"] as const satisfies readonly (keyof Filters)[];

const MAP_FILTER_KEYS = ["mapLocation", "completedMarkers"] as const satisfies readonly (keyof Filters)[];

type ContentKey = "quests" | "achievements" | "collectibles" | "map";

const CONTENT_FILTER_KEYS = {
	quests: QUEST_FILTER_KEYS,
	achievements: ACHIEVEMENT_FILTER_KEYS,
	collectibles: COLLECTION_FILTER_KEYS,
	map: MAP_FILTER_KEYS
} satisfies Record<ContentKey, readonly (keyof Filters)[]>;

type PersistedFilters = Partial<{
	[K in ContentKey]: Partial<Pick<Filters, (typeof CONTENT_FILTER_KEYS)[K][number]>>;
}>;

function isContentKey(value: unknown): value is ContentKey {
	return value === "quests" || value === "achievements" || value === "collectibles" || value === "map";
}

function getStorageKey(game: string) {
	return `filters:${game}`;
}

function readPersistedFilters(game: string): PersistedFilters {
	if (typeof window === "undefined") return {};

	try {
		const raw = window.localStorage.getItem(getStorageKey(game));
		return raw ? (JSON.parse(raw) as PersistedFilters) : {};
	} catch {
		return {};
	}
}

function writePersistedFilters(game: string, data: PersistedFilters) {
	if (typeof window === "undefined") return;

	try {
		window.localStorage.setItem(getStorageKey(game), JSON.stringify(data));
	} catch {}
}

function pickFilters<K extends keyof Filters>(filters: Filters, keys: readonly K[]): Pick<Filters, K> {
	const result = {} as Pick<Filters, K>;

	for (const key of keys) {
		result[key] = filters[key];
	}

	return result;
}

export function FiltersProvider({ children }: { children: React.ReactNode }) {
	const params = useParams();
	const { game, content } = params;

	const gameKey = Array.isArray(game) ? game[0] : game;
	const rawContent = Array.isArray(content) ? content[0] : content;
	const contentKey = isContentKey(rawContent) ? rawContent : null;

	const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

	const readyRef = useRef(false);

	useEffect(() => {
		readyRef.current = false;

		const timeout = setTimeout(() => {
			setFilters((prev) => {
				const next: Filters = {
					...DEFAULT_FILTERS,
					mapMarkers: prev.mapMarkers
				};

				if (gameKey && contentKey) {
					const stored = readPersistedFilters(gameKey)[contentKey];

					if (stored) {
						Object.assign(next, stored);
					}
				}

				return next;
			});

			readyRef.current = true;
		});

		return () => clearTimeout(timeout);
	}, [gameKey, contentKey]);

	useEffect(() => {
		if (!readyRef.current || !gameKey || !contentKey) return;

		const slice = pickFilters(filters, CONTENT_FILTER_KEYS[contentKey]);
		const stored = readPersistedFilters(gameKey);

		writePersistedFilters(gameKey, {
			...stored,
			[contentKey]: slice
		});
	}, [filters, gameKey, contentKey]);

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
