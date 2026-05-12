import { groupBy } from "@/app/lib/utils/group";
import { AchievementType } from "@/app/types/achievement";

export type AchievementGroupNode = {
	title: string;
	items: AchievementType[];
};

export function buildAchievementTree(achievements: AchievementType[], groupByQuestGroup: boolean): AchievementGroupNode[] {
	if (!groupByQuestGroup) {
		return [
			{
				title: "Achievements",
				items: achievements
			}
		];
	}

	const grouped = groupBy(achievements, (a) => a.achievement_group?.name || "Other");

	return Object.entries(grouped).map(([title, items]) => ({
		title,
		items
	}));
}
