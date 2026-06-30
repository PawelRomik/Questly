"use client";

import { GET_QUESTS_NO_TAGS, GET_QUESTS_WITH_TAGS } from "@/app/lib/queries";
import { useFilters } from "@/app/context/FiltersContext";
import { useQuestIcons } from "@/app/hooks/useQuestIcons";
import QuestTreeRenderer from "@/app/components/quest/QuestTreeRenderer";
import { useQuestGrouping } from "@/app/hooks/useQuestGrouping";
import { useParams } from "next/navigation";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { CompletedOption, MissableOption } from "@/app/components/filters/types";
import { useLocale } from "next-intl";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { Quest } from "@/app/types/quest";

import { useFuzzySearch } from "@/app/hooks/useFuzzySearch";
import { useDebounce } from "@/app/lib/utils/useDebounce";
import { useMemo } from "react";
import { useCompleted } from "@/app/context/CompletedContext";

export default function QuestList() {
	const params = useParams();
	const game = params.game as string;
	const { filters } = useFilters();
	const { search, sort } = filters;
	const locale = useLocale();

	const query = filters.searchTags ? GET_QUESTS_WITH_TAGS : GET_QUESTS_NO_TAGS;
	const quests = useLocalizedList<Quest, { game: string; locale: string }>({
		query,
		vars: {
			game,
			locale
		},
		locale,
		getItems: (data) => data?.quests ?? [],
		getId: (q) => q.uuid
	});

	const debouncedSearch = useDebounce(search, 250);

	const searchedQuests = useFuzzySearch({
		items: quests,
		search: debouncedSearch,
		keys: ["title", ...(filters.searchTags ? ["tags.name", "dlc.title"] : [])],
		getId: (q) => q.uuid,
		extraMatches: filters.searchTags ? (q, term) => q.missable && "missable".includes(term) : undefined
	});

	const { completedSet } = useCompleted(game, "quests");

	const visibleQuests = useMemo(() => {
		let list = filters.missables === MissableOption.SHOW_ONLY ? searchedQuests.filter((q) => q.missable) : searchedQuests;

		if (filters.dlc !== "all") {
			list = list.filter((q) => q.dlc?.uuid === filters.dlc);
		}

		switch (filters.completed) {
			case CompletedOption.HIDE:
				list = list.filter((q) => !completedSet.has(q.uuid));
				break;

			case CompletedOption.SHOW_FIRST:
				list = [...list].sort((a, b) => Number(completedSet.has(b.uuid)) - Number(completedSet.has(a.uuid)));
				break;

			case CompletedOption.SHOW_LAST:
				list = [...list].sort((a, b) => Number(completedSet.has(a.uuid)) - Number(completedSet.has(b.uuid)));
				break;
		}

		return list;
	}, [searchedQuests, filters, completedSet]);
	const styles = useGameStyles(questModalVariants);

	const { getTypeIcon, getLocationIcon, getGroupIcon, getActIcon } = useQuestIcons();
	const { default_icon, search_icon, missable_icon } = useGameAssets();

	const tree = useQuestGrouping(
		visibleQuests,
		filters,
		{
			getTypeIcon,
			getLocationIcon,
			getGroupIcon,
			getActIcon
		},
		locale,
		{ searchIcon: search_icon, defaultIcon: default_icon, missableIcon: missable_icon }
	);

	return (
		<div className={styles.list()}>
			<QuestTreeRenderer nodes={tree} sort={sort} />
		</div>
	);
}
