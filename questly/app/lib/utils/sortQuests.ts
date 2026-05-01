import { Quest } from "@/app/types/quest";

export function sortQuests(list: Quest[], sort: string, isCompleted: (id: string) => boolean) {
	const copy = [...list];

	return copy.sort((a, b) => {
		const aDone = isCompleted(a.uuid);
		const bDone = isCompleted(b.uuid);

		if (aDone !== bDone) return aDone ? 1 : -1;

		switch (sort) {
			case "az":
				return a.title.localeCompare(b.title);
			case "za":
				return b.title.localeCompare(a.title);
			case "levelAsc":
				return a.level - b.level;
			case "levelDesc":
				return b.level - a.level;
			default:
				return 0;
		}
	});
}
