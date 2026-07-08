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
import { useLocale, useTranslations } from "next-intl";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { useFuzzySearch } from "@/app/hooks/useFuzzySearch";
import { useDebounce } from "@/app/lib/utils/useDebounce";
import { CompletedOption, MissableOption } from "@/app/components/filters/types";
import { sortAchievements } from "@/app/lib/utils/sortAchievements";

export default function AchievementList() {
	const { game } = useParams() as { game: string };
	const t = useTranslations();

	const { filters } = useFilters();
	const { search, groupByQuestGroup, sort, missables } = filters;

	const styles = useGameStyles(achievementVariants);

	const { toggle, completedSet } = useCompleted(game, "achievements");
	const locale = useLocale();

	const achievements = useLocalizedList<AchievementType, GetAchievementsVars>({
		query: GET_ACHIEVEMENTS,
		vars: {
			game,
			locale
		},
		locale,
		getItems: (data) => data?.achievements ?? [],
		getId: (a) => a.uuid
	});
	const debouncedSearch = useDebounce(search, 250);

	const searchedAchievements = useFuzzySearch({
		items: achievements,
		search: debouncedSearch,
		keys: ["title", ...(filters.searchTags ? ["tags.name", "dlc.title"] : [])],
		getId: (a) => a.uuid,
		extraMatches: filters.searchTags ? (a, term) => a.missable && "missable".includes(term) : undefined
	});

	const visibleAchievements = useMemo(() => {
		let list = filters.missables === MissableOption.SHOW_ONLY ? searchedAchievements.filter((a) => a.missable) : searchedAchievements;

		if (filters.dlc !== "all") {
			list = list.filter((a) => a.dlc?.uuid === filters.dlc);
		}

		if (filters.completed === CompletedOption.HIDE) {
			list = list.filter((a) => !completedSet.has(a.uuid));
		}

		return list;
	}, [searchedAchievements, filters, completedSet]);

	const sortedAchievements = useMemo(
		() => sortAchievements(visibleAchievements, sort, completedSet, filters.completed, missables),
		[visibleAchievements, sort, completedSet, filters.completed, missables]
	);
	const { achievement_icon, search_icon } = useGameAssets();

	const grouped = useMemo(() => {
		if (search.trim()) {
			return [
				{
					title: t("searchResults"),
					items: sortedAchievements,
					icon: search_icon
				}
			];
		}

		return buildAchievementTree(sortedAchievements, groupByQuestGroup, locale, {
			allAchievements: t("achievements.achievements"),
			other: t("common.other")
		});
	}, [search, sortedAchievements, t, groupByQuestGroup, locale, search_icon]);

	return (
		<div className={styles.root()}>
			{grouped.map((group) => {
				const completedCount = group.items.filter((a) => completedSet.has(a.uuid)).length;
				const icon = search ? search_icon : group.icon || achievement_icon;

				return (
					<Section key={group.title} title={search ? t("filters.searchResults") : group.title} count={group.items.length} completed={completedCount} icon={icon}>
						{group.items.map((achievement) => (
							<Achievement
								key={`${achievement.uuid}-${filters.hiddenAchievements}`}
								achievement={achievement}
								completed={completedSet.has(achievement.uuid)}
								onToggle={() => toggle(achievement.uuid)}
							/>
						))}
					</Section>
				);
			})}
		</div>
	);
}
