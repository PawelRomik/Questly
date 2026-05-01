import { useMemo } from "react";
import { Quest } from "@/app/types/quest";
import { groupBy } from "@/app/lib/utils/group";
import { buildQuestTree, Getters, GroupKey } from "@/app/lib/utils/buildQuestTree";
import { Filters } from "@/app/components/filters/types";

export function useQuestGrouping(quests: Quest[], filters: Filters, getters: Getters) {
	return useMemo(() => {
		if (filters.search) {
			return [
				{
					title: "Search results",
					items: quests
				}
			];
		}

		if (filters.groupByQuestGroup) {
			const expanded = quests.flatMap((q) =>
				q.quest_groups?.length
					? q.quest_groups.map((g) => ({
							...q,
							__group: g.title
						}))
					: [{ ...q, __group: "Other" }]
			);

			const grouped = groupBy(expanded, (q) => q.__group);

			return Object.entries(grouped).map(([title, list]) => ({
				title,
				items: list
			}));
		}

		const keys: GroupKey[] = [];

		if (filters.groupByAct) keys.push("act");
		if (filters.groupByLocation) keys.push("location");
		if (filters.groupByType) keys.push("type");

		if (!keys.length) {
			return [
				{
					title: "All quests",
					items: quests
				}
			];
		}

		return buildQuestTree(quests, keys, getters);
	}, [quests, filters, getters]);
}
