import { Quest } from "@/app/types/quest";
import { GroupKey } from "./buildQuestTree";

export function groupBy<T, K extends string>(list: T[], getKey: (item: T) => K): Record<K, T[]> {
	return list.reduce(
		(acc, item) => {
			const key = getKey(item);
			(acc[key] ??= []).push(item);
			return acc;
		},
		{} as Record<K, T[]>
	);
}

export function getKeyValue(q: Quest, key: GroupKey): string {
	switch (key) {
		case "quest_group":
			return q.quest_groups?.[0]?.title ?? "Other";

		case "act":
			return q.quest_act?.title ?? "Unknown act";

		case "location":
			return q.location?.name ?? "Unknown location";

		case "type":
			return q.quest_type?.name ?? "Other";

		default:
			return "Other";
	}
}
