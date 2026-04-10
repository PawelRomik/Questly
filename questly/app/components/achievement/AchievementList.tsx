"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { GET_ACHIEVEMENTS } from "@/app/lib/queries";
import Achievement from "@/app/components/achievement/Achievement";
import { useFilters } from "@/app/context/FiltersContext";
import { GetAchievementsData, GetAchievementsVars } from "@/app/types/achievement";
import { useCompleted } from "@/app/hooks/useCompleted";
import { useMemo } from "react";

export default function AchievementList() {
	const params = useParams();
	const game = params.game as string;

	const { filters } = useFilters();
	const { search } = filters;
	const { toggle, isCompleted } = useCompleted(game, "achievements");

	const { data, previousData } = useQuery<GetAchievementsData, GetAchievementsVars>(GET_ACHIEVEMENTS, {
		variables: { game, search },
		notifyOnNetworkStatusChange: true
	});

	const achievements = useMemo(() => {
		return data?.achievements ?? previousData?.achievements ?? [];
	}, [data, previousData]);

	return (
		<div className='flex flex-col gap-4 w-full'>
			{achievements.map((a, i) => (
				<Achievement
					secret={a.secret}
					search={search}
					onToggle={() => toggle(a.uuid)}
					key={i}
					title={a.title}
					completed={isCompleted(a.uuid)}
					description={a.description}
					url={a.icon.url}
				/>
			))}
		</div>
	);
}
