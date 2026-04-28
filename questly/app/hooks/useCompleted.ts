"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "completed";

type CompletedState = Record<
	string,
	{
		quests: string[];
		achievements: string[];
		collections: Record<string, string[]>;
	}
>;

export function useCompleted(game: string, type: "quests" | "achievements" | "collections") {
	const [state, setState] = useState<CompletedState>(() => {
		if (typeof window === "undefined") return {};

		const raw = localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : {};

		for (const g in parsed) {
			if (!parsed[g].collections || Array.isArray(parsed[g].collections)) {
				parsed[g].collections = {};
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

	const gameData = useMemo(() => {
		const existing = state[game] || {};

		return {
			quests: existing.quests ?? [],
			achievements: existing.achievements ?? [],
			collections: existing.collections ?? {}
		};
	}, [state, game]);

	const completed = useMemo(() => {
		if (type === "collections") return [];
		return gameData[type];
	}, [gameData, type]);

	const toggle = useCallback(
		(id: string) => {
			if (type === "collections") return;

			setState((prev) => {
				const existing = prev[game] || {};

				const gameData = {
					quests: existing.quests ?? [],
					achievements: existing.achievements ?? [],
					collections: existing.collections ?? {}
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
		},
		[game, type]
	);

	const isCompleted = useCallback(
		(id: string) => {
			if (type === "collections") return false;
			return completed.includes(id);
		},
		[completed, type]
	);

	const toggleCollectionItem = useCallback(
		(collectionId: string, itemId: string) => {
			setState((prev) => {
				const existing = prev[game] || {};

				const gameData = {
					quests: existing.quests ?? [],
					achievements: existing.achievements ?? [],
					collections: existing.collections ?? {}
				};

				const collection = gameData.collections[collectionId] ?? [];

				const exists = collection.includes(itemId);

				const next = exists ? collection.filter((x) => x !== itemId) : [...collection, itemId];

				return {
					...prev,
					[game]: {
						...gameData,
						collections: {
							...gameData.collections,
							[collectionId]: next
						}
					}
				};
			});
		},
		[game]
	);

	const isCollectionItemCompleted = useCallback(
		(collectionId: string, itemId: string) => {
			return gameData.collections[collectionId]?.includes(itemId) ?? false;
		},
		[gameData.collections]
	);

	return {
		completed,
		toggle,
		isCompleted,

		toggleCollectionItem,
		isCollectionItemCompleted,
		collections: gameData.collections
	};
}
