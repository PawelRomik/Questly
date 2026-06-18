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
	getGroupIcon: (list: Quest[], groupUuid: string) => string | StaticImageData;
	getActIcon: (list: Quest[]) => string | StaticImageData;
};

export function buildQuestTree(quests: Quest[], keys: GroupKey[], getters: Getters, locale = "en"): GroupNode[] {
	const actTitles = new Map<string, string>();
	const locationTitles = new Map<string, string>();
	const groupTitles = new Map<string, string>();
	const typeTitles = new Map<string, string>();

	for (const quest of quests) {
		if (quest.quest_act?.uuid && quest.quest_act?.locale === locale) {
			actTitles.set(quest.quest_act.uuid, quest.quest_act.title);
		}

		if (quest.quest_type?.uuid && quest.quest_type?.locale === locale) {
			typeTitles.set(quest.quest_type.uuid, quest.quest_type.name);
		}

		if (quest.location?.uuid && quest.location?.locale === locale) {
			locationTitles.set(quest.location.uuid, quest.location.name);
		}

		for (const group of quest.quest_groups ?? []) {
			if (group.locale === locale) {
				groupTitles.set(group.uuid, group.title);
			}
		}
	}

	const groupRecursive = (list: Quest[], depth: number): GroupNode[] => {
		const key = keys[depth];
		let map: Record<string, Quest[]> = {};

		if (key === "quest_group") {
			for (const quest of list) {
				const groups = quest.quest_groups ?? [];

				if (groups.length === 0) {
					(map.other ??= []).push(quest);
					continue;
				}

				for (const group of groups) {
					(map[group.uuid] ??= []).push(quest);
				}
			}
		} else {
			map = groupBy(list, (q) => {
				switch (key) {
					case "act":
						return q.quest_act?.uuid ?? "unknown";

					case "location":
						return q.location?.uuid ?? "unknown";

					case "type":
						return q.quest_type?.uuid ?? "unknown";

					default:
						return getKeyValue(q, key);
				}
			});
		}

		const entries = Object.entries(map);

		if (key === "act") {
			entries.sort(([, a], [, b]) => {
				const orderA = a[0]?.quest_act?.order ?? 9999;
				const orderB = b[0]?.quest_act?.order ?? 9999;

				return orderA - orderB;
			});
		}

		return entries.map(([uuid, grouped]) => {
			let title = uuid;

			switch (key) {
				case "act":
					title = actTitles.get(uuid) ?? grouped[0]?.quest_act?.title ?? uuid;
					break;

				case "location":
					title = locationTitles.get(uuid) ?? grouped[0]?.location?.name ?? uuid;
					break;

				case "quest_group":
					title = uuid === "other" ? "Other" : (groupTitles.get(uuid) ?? grouped[0]?.quest_groups?.find((g) => g.uuid === uuid)?.title ?? uuid);
					break;

				case "type":
					title = typeTitles.get(uuid) ?? grouped[0]?.quest_type?.name ?? uuid;
					break;
			}

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
				node.icon = getters.getGroupIcon(grouped, uuid);
			}

			if (key === "type") {
				node.icon = getters.getTypeIcon(grouped);
			}

			return node;
		});
	};

	return groupRecursive(quests, 0);
}
