"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

import { GET_ACHIEVEMENTS } from "@/app/lib/queries";

import Achievement from "@/app/components/achievement/Achievement";
import Section from "@/app/components/quest/Section";

import { useFilters } from "@/app/context/FiltersContext";
import { useCompleted } from "@/app/context/CompletedContext";

import { useApollo } from "@/app/hooks/useApollo";
import { extractList } from "@/app/hooks/extractList";

import { AchievementType, GetAchievementsData, GetAchievementsVars } from "@/app/types/achievement";

import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

import { buildAchievementTree } from "@/app/lib/utils/buildAchievementTree";

export default function AchievementList() {
	const { game } = useParams() as { game: string };

	const { filters } = useFilters();
	const { search, groupByQuestGroup } = filters;

	const styles = achievementVariants["witcher3"];

	const { toggle, isCompleted } = useCompleted(game, "achievements");

	const { data } = useApollo<GetAchievementsData, GetAchievementsVars>(GET_ACHIEVEMENTS, {
		game,
		search
	});

	const achievements = useMemo(() => extractList<AchievementType>(data, "achievements"), [data]);

	const grouped = useMemo(() => buildAchievementTree(achievements, groupByQuestGroup), [achievements, groupByQuestGroup]);

	return (
		<div className={styles.root()}>
			{grouped.map((group) => {
				const completedCount = group.items.filter((a) => isCompleted(a.uuid)).length;

				return (
					<Section key={group.title} title={search ? "Search results" : group.title} count={group.items.length} completed={completedCount}>
						{group.items.map((achievement) => (
							<Achievement key={achievement.uuid} achievement={achievement} completed={isCompleted(achievement.uuid)} search={search} onToggle={() => toggle(achievement.uuid)} />
						))}
					</Section>
				);
			})}
		</div>
	);
}
