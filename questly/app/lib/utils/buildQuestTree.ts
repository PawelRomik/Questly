import { groupBy } from "@/app/lib/utils/group";
import { getKeyValue } from "@/app/lib/utils/groupHelpers";
import { Quest } from "@/app/types/quest";

export type GroupKey = "quest_group" | "act" | "location" | "type";

type GroupNode = {
	title: string;
	items?: Quest[];
	children?: GroupNode[];
	icon?: string;
};

export type Getters = {
	getTypeIcon: (list: Quest[]) => string | undefined;
	getLocationIcon: (list: Quest[]) => string | undefined;
};

export function buildQuestTree(quests: Quest[], keys: GroupKey[], getters: Getters): GroupNode[] {
	if (!keys.length) {
		return [
			{
				title: "All quests",
				items: quests
			}
		];
	}

	const groupRecursive = (list: Quest[], depth: number): GroupNode[] => {
		const key = keys[depth];

		const map = groupBy(list, (q) => getKeyValue(q, key));

		const entries = Object.entries(map);

		if (key === "act") {
			entries.sort(([, a], [, b]) => {
				const orderA = a[0]?.quest_act?.order ?? 9999;
				const orderB = b[0]?.quest_act?.order ?? 9999;

				return orderA - orderB;
			});
		}

		return entries.map(([title, grouped]) => {
			const node: GroupNode = {
				title
			};

			if (depth === keys.length - 1) {
				node.items = grouped;
			} else {
				node.children = groupRecursive(grouped, depth + 1);
			}

			if (key === "location") {
				node.icon = getters.getLocationIcon(grouped);
			}

			if (key === "type") {
				node.icon = getters.getTypeIcon(grouped);
			}

			return node;
		});
	};

	return groupRecursive(quests, 0);
}
