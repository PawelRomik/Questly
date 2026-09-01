import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useActiveAchievement() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const activeAchievementId = searchParams.get("activeAchievement");

	const setActiveAchievementId = useCallback(
		(uuid: string | null) => {
			const params = new URLSearchParams(searchParams.toString());

			if (uuid) params.set("activeAchievement", uuid);
			else params.delete("activeAchievement");

			router.replace(`?${params.toString()}`);
		},
		[router, searchParams]
	);

	return { activeAchievementId, setActiveAchievementId };
}
