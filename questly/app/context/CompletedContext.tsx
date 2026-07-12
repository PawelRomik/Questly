// CompletedContext.tsx
"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";

const STORAGE_KEY = "completed";

type CompletedState = Record<
	string,
	{
		quests: string[];
		achievements: string[];
		collections: string[];
	}
>;

type CompletedContextType = {
	state: CompletedState;

	toggle: (game: string, type: "quests" | "achievements", id: string) => void;

	isCompleted: (game: string, type: "quests" | "achievements", id: string) => boolean;

	reset: (game: string, type: "quests" | "achievements" | "collections") => void;

	toggleCollectionItem: (game: string, itemId: string) => void;

	isCollectionItemCompleted: (game: string, itemId: string) => boolean;
};

const CompletedContext = createContext<CompletedContextType | null>(null);

export function CompletedProvider({ children }: { children: ReactNode }) {
	const [state, setState] = useState<CompletedState>(() => {
		if (typeof window === "undefined") return {};

		const raw = localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : {};

		for (const g in parsed) {
			if (!parsed[g].collections || Array.isArray(parsed[g].collections)) {
				parsed[g].collections = [];
			}

			if (!Array.isArray(parsed[g].achievements)) {
				parsed[g].achievements = [];
			}

			if (!Array.isArray(parsed[g].quests)) {
				parsed[g].quests = [];
			}
		}

		return parsed;
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	}, [state]);

	const toggle = useCallback((game: string, type: "quests" | "achievements", id: string) => {
		setState((prev) => {
			const existing = prev[game] || {};

			const gameData = {
				quests: existing.quests ?? [],
				achievements: existing.achievements ?? [],
				collections: existing.collections ?? []
			};

			const list = gameData[type];
			const exists = list.includes(id);

			const next = exists ? list.filter((x) => x !== id) : [...list, id];

			return {
				...prev,
				[game]: {
					...gameData,
					[type]: next
				}
			};
		});
	}, []);

	const isCompleted = useCallback(
		(game: string, type: "quests" | "achievements", id: string) => {
			return state[game]?.[type]?.includes(id) ?? false;
		},
		[state]
	);

	const reset = useCallback((game: string, type: "quests" | "achievements" | "collections") => {
		setState((prev) => {
			const existing = prev[game];

			if (!existing) {
				return prev;
			}

			return {
				...prev,
				[game]: {
					...existing,
					[type]: []
				}
			};
		});
	}, []);

	const toggleCollectionItem = useCallback((game: string, itemId: string) => {
		setState((prev) => {
			const existing = prev[game];

			const gameData = {
				quests: existing?.quests ?? [],
				achievements: existing?.achievements ?? [],
				collections: existing?.collections ?? []
			};

			const exists = gameData.collections.includes(itemId);

			return {
				...prev,
				[game]: {
					...gameData,
					collections: exists ? gameData.collections.filter((id) => id !== itemId) : [...gameData.collections, itemId]
				}
			};
		});
	}, []);

	const isCollectionItemCompleted = useCallback((game: string, itemId: string) => state[game]?.collections?.includes(itemId) ?? false, [state]);

	const value = useMemo(
		() => ({
			state,
			toggle,
			reset,
			isCompleted,
			toggleCollectionItem,
			isCollectionItemCompleted
		}),
		[state, toggle, isCompleted, toggleCollectionItem, isCollectionItemCompleted, reset]
	);

	return <CompletedContext.Provider value={value}>{children}</CompletedContext.Provider>;
}

export function useCompleted(game: string, type: "quests" | "achievements" | "collections") {
	const context = useContext(CompletedContext);

	if (!context) {
		throw new Error("useCompleted must be used inside CompletedProvider");
	}

	const { state, toggle, isCompleted, reset, toggleCollectionItem, isCollectionItemCompleted } = context;

	const gameData = useMemo(
		() =>
			state[game] ?? {
				quests: [],
				achievements: [],
				collections: []
			},
		[state, game]
	);

	const completedSet = useMemo(() => {
		return new Set(gameData[type]);
	}, [gameData, type]);

	return {
		completed: gameData[type],

		completedSet,

		toggle: (id: string) => {
			if (type === "collections") return;
			toggle(game, type, id);
		},

		reset: () => {
			reset(game, type);
		},

		isCompleted: (id: string) => {
			if (type === "collections") return false;
			return isCompleted(game, type, id);
		},

		toggleCollectionItem: (itemId: string) => {
			toggleCollectionItem(game, itemId);
		},

		isCollectionItemCompleted: (itemId: string) => {
			return isCollectionItemCompleted(game, itemId);
		},

		collections: gameData.collections
	};
}
