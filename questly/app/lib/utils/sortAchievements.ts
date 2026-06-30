import { CompletedOption, MissableOption, SortOption } from "@/app/components/filters/types";
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

export function sortAchievements(
	achievements: AchievementType[],
	sort: string,
	completedSet: Set<string>,
	completed: CompletedOption = CompletedOption.DEFAULT,
	missables: MissableOption = MissableOption.DEFAULT
) {
	const sorted = [...achievements];

	sorted.sort((a, b) => {
		if (completed !== CompletedOption.DEFAULT) {
			const completedA = completedSet.has(a.uuid);
			const completedB = completedSet.has(b.uuid);

			if (completedA !== completedB) {
				if (completed === CompletedOption.SHOW_FIRST) {
					return Number(completedB) - Number(completedA);
				}

				if (completed === CompletedOption.SHOW_LAST) {
					return Number(completedA) - Number(completedB);
				}
			}
		}

		if (missables === MissableOption.SHOW_FIRST && a.missable !== b.missable) {
			return Number(b.missable) - Number(a.missable);
		}

		return compareAchievements(a, b, sort);
	});

	return sorted;
}
