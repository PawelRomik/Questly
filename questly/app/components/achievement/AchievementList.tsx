"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { GET_ACHIEVEMENTS } from "@/app/lib/queries";
import Achievement from "@/app/components/achievement/Achievement";
import { useFilters } from "@/app/context/FiltersContext";
import { AchievementType, GetAchievementsData, GetAchievementsVars } from "@/app/types/achievement";
import { useCompleted } from "@/app/hooks/useCompleted";
import { useMemo } from "react";
import Section from "@/app/components/quest/Section";

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

	const countCompleted = (achievements: AchievementType[]) => {
		return achievements.filter((a) => isCompleted(a.uuid)).length;
	};

	return (
		<div className='w-full px-3 flex flex-col items-center '>
			<div className='w-full py-4'>
				<Section title={search ? "Search results" : "Achievements"} count={achievements.length} completed={countCompleted(achievements)}>
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
				</Section>
			</div>
		</div>
	);
}
