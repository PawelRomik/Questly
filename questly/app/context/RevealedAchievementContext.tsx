"use client";

import { createContext, useContext, useCallback, useState, ReactNode } from "react";
import { useFilters } from "@/app/context/FiltersContext";
import { HiddenAchievementsOption } from "@/app/components/filters/types";

type RevealedAchievementsContextType = {
	isRevealed: (uuid: string) => boolean;
	reveal: (uuid: string) => void;
};

const RevealedAchievementsContext = createContext<RevealedAchievementsContextType | null>(null);

export function RevealedAchievementsProvider({ children }: { children: ReactNode }) {
	const [revealed, setRevealed] = useState<Set<string>>(new Set());
	const { filters } = useFilters();

	const [prevFilter, setPrevFilter] = useState(filters.hiddenAchievements);

	if (filters.hiddenAchievements !== prevFilter) {
		const wasHide = prevFilter === HiddenAchievementsOption.HIDE;

		setPrevFilter(filters.hiddenAchievements);

		if (filters.hiddenAchievements === HiddenAchievementsOption.HIDE && !wasHide) {
			setRevealed(new Set());
		}
	}

	const isRevealed = useCallback((uuid: string) => revealed.has(uuid), [revealed]);

	const reveal = useCallback((uuid: string) => {
		setRevealed((prev) => {
			if (prev.has(uuid)) return prev;

			const next = new Set(prev);
			next.add(uuid);
			return next;
		});
	}, []);

	return <RevealedAchievementsContext.Provider value={{ isRevealed, reveal }}>{children}</RevealedAchievementsContext.Provider>;
}

export function useRevealedAchievements() {
	const context = useContext(RevealedAchievementsContext);

	if (!context) {
		throw new Error("useRevealedAchievements must be used inside RevealedAchievementsProvider");
	}

	return context;
}
