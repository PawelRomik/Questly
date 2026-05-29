"use client";

import { GET_QUESTS_NO_TAGS, GET_QUESTS_WITH_TAGS } from "@/app/lib/queries";
import { useFilters } from "@/app/context/FiltersContext";
import { useApollo } from "@/app/hooks/useApollo";
import { useQuestIcons } from "@/app/hooks/useQuestIcons";
import QuestTreeRenderer from "@/app/components/quest/QuestTreeRenderer";
import { useQuestGrouping } from "@/app/hooks/useQuestGrouping";
import { useMemo } from "react";
import { extractList } from "@/app/hooks/extractList";
import { Quest } from "@/app/types/quest";
import { useParams } from "next/navigation";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

export default function QuestList() {
	const params = useParams();
	const game = params.game as string;
	const { filters } = useFilters();
	const { search, sort } = filters;

	const query = filters.searchTags ? GET_QUESTS_WITH_TAGS : GET_QUESTS_NO_TAGS;
	const { data } = useApollo(query, { search, game });
	const quests = useMemo(() => extractList<Quest>(data, "quests"), [data]);
	const styles = useGameStyles(questModalVariants);

	const { getTypeIcon, getLocationIcon, getGroupIcon, getActIcon } = useQuestIcons();
	const { default_icon, search_icon } = useGameAssets();

	const tree = useQuestGrouping(
		quests,
		filters,
		{
			getTypeIcon,
			getLocationIcon,
			getGroupIcon,
			getActIcon
		},
		{ searchIcon: search_icon, defaultIcon: default_icon }
	);

	return (
		<div className={styles.list()}>
			<QuestTreeRenderer nodes={tree} sort={sort} />
		</div>
	);
}
