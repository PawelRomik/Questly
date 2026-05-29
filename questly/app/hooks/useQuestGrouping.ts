import { useMemo } from "react";
import { Quest } from "@/app/types/quest";
import { buildQuestTree, Getters, GroupKey } from "@/app/lib/utils/buildQuestTree";
import { Filters } from "@/app/components/filters/types";
import { StaticImageData } from "next/image";

export function useQuestGrouping(quests: Quest[], filters: Filters, getters: Getters, icons: { defaultIcon: string | StaticImageData; searchIcon: string | StaticImageData }) {
	return useMemo(() => {
		if (filters.search) {
			return [
				{
					title: "Search results",
					icon: icons.searchIcon,
					items: quests
				}
			];
		}

		if (filters.groupByQuestGroup) {
			return buildQuestTree(quests, ["quest_group"], getters);
		}

		const keys: GroupKey[] = [];

		if (filters.groupByAct) keys.push("act");
		if (filters.groupByLocation) keys.push("location");
		if (filters.groupByType) keys.push("type");

		if (!keys.length) {
			return [
				{
					title: "All quests",
					icon: icons.defaultIcon,
					items: quests
				}
			];
		}

		return buildQuestTree(quests, keys, getters);
	}, [quests, filters, getters, icons]);
}
