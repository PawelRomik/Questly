import { CompletedOption, MissableOption, SortOption } from "@/app/components/filters/types";
import { Quest } from "@/app/types/quest";

function compareBySort(a: Quest, b: Quest, sort: string) {
	switch (sort) {
		case SortOption.ZA:
			return b.title.localeCompare(a.title);

		case SortOption.LEVEL_ASC:
			return (a.level ?? 0) - (b.level ?? 0);

		case SortOption.LEVEL_DESC:
			return (b.level ?? 0) - (a.level ?? 0);

		case SortOption.AZ:
		default:
			return a.title.localeCompare(b.title);
	}
}

export function sortQuests(
	quests: Quest[],
	sort: string,
	isCompleted: (uuid: string) => boolean,
	completed: CompletedOption = CompletedOption.DEFAULT,
	missables: MissableOption = MissableOption.DEFAULT
) {
	const sorted = [...quests];

	sorted.sort((a, b) => {
		if (completed !== CompletedOption.DEFAULT) {
			const completedA = isCompleted(a.uuid);
			const completedB = isCompleted(b.uuid);

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

		return compareBySort(a, b, sort);
	});

	return sorted;
}
