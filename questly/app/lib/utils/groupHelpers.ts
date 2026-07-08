import { Quest } from "@/app/types/quest";
import { GroupKey } from "./buildQuestTree";

type Labels = {
	other: string;
};

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

export function getKeyValue(q: Quest, key: GroupKey, labels: Labels): string {
	switch (key) {
		case "quest_group":
			return q.quest_groups?.[0]?.title || labels.other;

		case "act":
			return q.quest_act?.title || labels.other;

		case "location":
			return q.location?.name || labels.other;

		case "type":
			return q.quest_type?.name || labels.other;
	}
}
