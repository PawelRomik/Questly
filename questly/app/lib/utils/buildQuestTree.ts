import { groupBy } from "@/app/lib/utils/group";
import { getKeyValue } from "@/app/lib/utils/groupHelpers";
import { Quest } from "@/app/types/quest";
import { StaticImageData } from "next/image";
import default_quest from "../../../public/assets/quest.png";

export type GroupKey = "quest_group" | "act" | "location" | "type";

type GroupNode = {
	title: string;
	items?: Quest[];
	children?: GroupNode[];
	icon: string | StaticImageData;
};

export type Getters = {
	getTypeIcon: (list: Quest[]) => string | StaticImageData;
	getLocationIcon: (list: Quest[]) => string | StaticImageData;
	getGroupIcon: (list: Quest[]) => string | StaticImageData;
	getActIcon: (list: Quest[]) => string | StaticImageData;
};

export function buildQuestTree(quests: Quest[], keys: GroupKey[], getters: Getters): GroupNode[] {
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
				title,
				icon: default_quest
			};

			if (depth === keys.length - 1) {
				node.items = grouped;
			} else {
				node.children = groupRecursive(grouped, depth + 1);
			}

			if (key === "location") {
				node.icon = getters.getLocationIcon(grouped);
			}

			if (key === "act") {
				node.icon = getters.getActIcon(grouped);
			}

			if (key === "quest_group") {
				node.icon = getters.getGroupIcon(grouped);
			}

			if (key === "type") {
				node.icon = getters.getTypeIcon(grouped);
			}

			return node;
		});
	};

	return groupRecursive(quests, 0);
}
