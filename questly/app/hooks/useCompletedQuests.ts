"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

type CompletedState = Record<string, string[]>;

const STORAGE_KEY = "completedQuests";

export function useCompletedQuests(game: string) {
	const [state, setState] = useState<CompletedState>(() => {
		if (typeof window === "undefined") return {};

		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : {};
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	}, [state]);

	const completed = useMemo(() => {
		return state[game] ?? [];
	}, [state, game]);

	const toggle = useCallback(
		(uuid: string) => {
			setState((prev) => {
				const gameList = prev[game] ?? [];

				const exists = gameList.includes(uuid);

				const next = exists ? gameList.filter((id) => id !== uuid) : [...gameList, uuid];

				return {
					...prev,
					[game]: next
				};
			});
		},
		[game]
	);

	const isCompleted = useCallback(
		(uuid: string) => {
			return completed.includes(uuid);
		},
		[completed]
	);

	return { completed, toggle, isCompleted };
}
