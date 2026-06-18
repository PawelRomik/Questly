"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

import { GET_ACHIEVEMENTS } from "@/app/lib/queries";

import Achievement from "@/app/components/achievement/Achievement";
import Section from "@/app/components/section/Section";

import { useFilters } from "@/app/context/FiltersContext";
import { useCompleted } from "@/app/context/CompletedContext";

import { AchievementType, GetAchievementsVars } from "@/app/types/achievement";

import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

import { buildAchievementTree } from "@/app/lib/utils/buildAchievementTree";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useLocale } from "next-intl";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";

export default function AchievementList() {
	const { game } = useParams() as { game: string };

	const { filters } = useFilters();
	const { search, groupByQuestGroup } = filters;

	const styles = useGameStyles(achievementVariants);

	const { toggle, isCompleted } = useCompleted(game, "achievements");
	const locale = useLocale();

	const achievements = useLocalizedList<AchievementType, GetAchievementsVars>({
		query: GET_ACHIEVEMENTS,
		vars: {
			game,
			search
		},
		locale,
		getItems: (data) => data?.achievements ?? [],
		getId: (a) => a.uuid
	});

	const grouped = useMemo(() => buildAchievementTree(achievements, groupByQuestGroup, locale), [achievements, groupByQuestGroup, locale]);

	const { achievement_icon, search_icon } = useGameAssets();

	return (
		<div className={styles.root()}>
			{grouped.map((group) => {
				const completedCount = group.items.filter((a) => isCompleted(a.uuid)).length;
				const icon = search ? search_icon : group.icon || achievement_icon;

				return (
					<Section key={group.title} title={search ? "Search results" : group.title} count={group.items.length} completed={completedCount} icon={icon}>
						{group.items.map((achievement) => (
							<Achievement key={achievement.uuid} achievement={achievement} completed={isCompleted(achievement.uuid)} search={search} onToggle={() => toggle(achievement.uuid)} />
						))}
					</Section>
				);
			})}
		</div>
	);
}
