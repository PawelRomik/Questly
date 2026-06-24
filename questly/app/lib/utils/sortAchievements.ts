import { MissableOption, SortOption } from "@/app/components/filters/types";
import { AchievementType } from "@/app/types/achievement";

function compareAchievements(a: AchievementType, b: AchievementType, sort: string) {
	switch (sort) {
		case SortOption.ZA:
			return b.title.localeCompare(a.title);

		case SortOption.AZ:
		default:
			return a.title.localeCompare(b.title);
	}
}

export function sortAchievements(achievements: AchievementType[], sort: string, missables: MissableOption = MissableOption.DEFAULT) {
	const sorted = [...achievements];

	sorted.sort((a, b) => {
		if (missables === MissableOption.SHOW_FIRST) {
			if (a.missable !== b.missable) {
				return Number(b.missable) - Number(a.missable);
			}
		}

		return compareAchievements(a, b, sort);
	});

	return sorted;
}
