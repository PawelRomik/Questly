import { useMemo } from "react";
import { Quest } from "@/app/types/quest";
import { buildQuestTree, Getters, GroupKey } from "@/app/lib/utils/buildQuestTree";
import { Filters, MissableOption } from "@/app/components/filters/types";
import { StaticImageData } from "next/image";

export function useQuestGrouping(
	quests: Quest[],
	filters: Filters,
	getters: Getters,
	icons: { defaultIcon: string | StaticImageData; searchIcon: string | StaticImageData; missableIcon: string | StaticImageData }
) {
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

		const isMissable = filters.missables === MissableOption.SHOW_ONLY;

		if (!keys.length) {
			return [
				{
					title: isMissable ? "Missables " : "All quests",
					icon: isMissable ? icons.missableIcon : icons.defaultIcon,
					items: quests
				}
			];
		}

		return buildQuestTree(quests, keys, getters);
	}, [quests, filters, getters, icons]);
}
