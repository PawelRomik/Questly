"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type ExpandCommand = {
	open: boolean;
	version: number;
};

type SectionExpandContextType = {
	command: ExpandCommand | null;
	expandAll: () => void;
	collapseAll: () => void;
};

const SectionExpandContext = createContext<SectionExpandContextType | null>(null);

export function SectionExpandProvider({ children }: { children: ReactNode }) {
	const [command, setCommand] = useState<ExpandCommand | null>(null);

	const expandAll = useCallback(() => {
		setCommand((prev) => ({ open: true, version: (prev?.version ?? 0) + 1 }));
	}, []);

	const collapseAll = useCallback(() => {
		setCommand((prev) => ({ open: false, version: (prev?.version ?? 0) + 1 }));
	}, []);

	return <SectionExpandContext.Provider value={{ command, expandAll, collapseAll }}>{children}</SectionExpandContext.Provider>;
}

export function useSectionExpand() {
	return useContext(SectionExpandContext);
}
