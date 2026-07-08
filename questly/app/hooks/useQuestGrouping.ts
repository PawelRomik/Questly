import { useMemo } from "react";
import { Quest } from "@/app/types/quest";
import { buildQuestTree, Getters, GroupKey } from "@/app/lib/utils/buildQuestTree";
import { Filters, MissableOption } from "@/app/components/filters/types";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

export function useQuestGrouping(
	quests: Quest[],
	filters: Filters,
	getters: Getters,
	locale: string,
	icons: { defaultIcon: string | StaticImageData; searchIcon: string | StaticImageData; missableIcon: string | StaticImageData }
) {
	const t = useTranslations();
	return useMemo(() => {
		if (filters.search) {
			return [
				{
					title: t("filters.searchResults"),
					icon: icons.searchIcon,
					items: quests
				}
			];
		}

		if (filters.groupByQuestGroup) {
			return buildQuestTree(quests, ["quest_group"], getters, locale, {
				other: t("common.other")
			});
		}

		const keys: GroupKey[] = [];

		if (filters.groupByAct) keys.push("act");
		if (filters.groupByLocation) keys.push("location");
		if (filters.groupByType) keys.push("type");

		const isMissable = filters.missables === MissableOption.SHOW_ONLY;

		if (!keys.length) {
			return [
				{
					title: isMissable ? t("filters.searchResults") : t("quests.allQuests"),
					icon: isMissable ? icons.missableIcon : icons.defaultIcon,
					items: quests
				}
			];
		}

		return buildQuestTree(quests, keys, getters, locale, {
			other: t("common.other")
		});
	}, [quests, filters, t, getters, icons, locale]);
}
