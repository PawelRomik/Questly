import { AchievementType } from "@/app/types/achievement";
import { groupBy } from "./group";

export type AchievementGroupNode = {
	title: string;
	items: AchievementType[];
	icon?: string;
	labels?: {
		allAchievements: string;
		other: string;
	};
};

export function buildAchievementTree(
	achievements: AchievementType[],
	groupByQuestGroup: boolean,
	locale = "en",
	labels = {
		allAchievements: "All achievements",
		other: "Other"
	}
): AchievementGroupNode[] {
	if (!groupByQuestGroup) {
		return [
			{
				title: labels.allAchievements,
				items: achievements
			}
		];
	}

	const groupTitles = new Map<string, string>();

	for (const achievement of achievements) {
		const group = achievement.achievement_group;

		if (group?.uuid && group?.locale === locale) {
			groupTitles.set(group.uuid, group.name);
		}
	}

	const grouped = groupBy(achievements, (a) => a.achievement_group?.uuid ?? "other");

	return Object.entries(grouped).map(([uuid, items]) => ({
		title: uuid === "other" ? labels.other : (groupTitles.get(uuid) ?? items[0]?.achievement_group?.name ?? uuid),

		items,

		icon: items[0]?.achievement_group?.icon?.url
	}));
}
