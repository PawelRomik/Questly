import { AchievementType } from "@/app/types/achievement";
import { groupBy } from "./group";

export type AchievementGroupNode = {
	title: string;
	items: AchievementType[];
	icon?: string;
};

export function buildAchievementTree(achievements: AchievementType[], groupByQuestGroup: boolean, locale = "en"): AchievementGroupNode[] {
	if (!groupByQuestGroup) {
		return [
			{
				title: "All achievements",
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
		title: uuid === "other" ? "Other" : (groupTitles.get(uuid) ?? items[0]?.achievement_group?.name ?? uuid),

		items,

		icon: items[0]?.achievement_group?.icon?.url
	}));
}
