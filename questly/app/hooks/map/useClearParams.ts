"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useClearParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		// Nie czyść parametrów na żadnej stronie /quests
		if (pathname.endsWith("/quests")) return;

		const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

		if (navigation?.type !== "reload") return;
		if (!searchParams.has("activeQuest")) return;

		const params = new URLSearchParams(searchParams.toString());
		params.delete("activeQuest");

		router.replace(params.toString() ? `${pathname}?${params.toString()}` : pathname);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
