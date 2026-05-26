import { AchievementType } from "@/app/types/achievement";
import { groupBy } from "./group";

export type AchievementGroupNode = {
	title: string;
	items: AchievementType[];
	icon?: string;
};

export function buildAchievementTree(achievements: AchievementType[], groupByQuestGroup: boolean): AchievementGroupNode[] {
	if (!groupByQuestGroup) {
		return [
			{
				title: "All achievements",
				items: achievements
			}
		];
	}

	const grouped = groupBy(achievements, (a) => a.achievement_group?.name || "Other");

	return Object.entries(grouped).map(([title, items]) => ({
		title,
		items,

		icon: items[0]?.achievement_group?.icon?.url
	}));
}
