"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

type CompletedState = Record<
	string,
	{
		quests: string[];
		achievements: string[];
	}
>;

const STORAGE_KEY = "completed";

export function useCompleted(game: string, type: "quests" | "achievements") {
	const [state, setState] = useState<CompletedState>(() => {
		if (typeof window === "undefined") return {};

		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : {};
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	}, [state]);

	const completed = useMemo(() => {
		return state[game]?.[type] ?? [];
	}, [state, game, type]);

	const toggle = useCallback(
		(id: string) => {
			setState((prev) => {
				const gameData = prev[game] ?? {
					quests: [],
					achievements: []
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

	const isCompleted = useCallback((id: string) => completed.includes(id), [completed]);

	return { completed, toggle, isCompleted };
}
