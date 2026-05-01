import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useActiveQuest() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const activeQuestId = searchParams.get("activeQuest");

	const setActiveQuestId = useCallback(
		(uuid: string | null) => {
			const params = new URLSearchParams(searchParams.toString());

			if (uuid) params.set("activeQuest", uuid);
			else params.delete("activeQuest");

			router.replace(`?${params.toString()}`);
		},
		[router, searchParams]
	);

	return { activeQuestId, setActiveQuestId };
}
