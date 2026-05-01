"use client";

import { GET_QUESTS_NO_TAGS, GET_QUESTS_WITH_TAGS } from "@/app/lib/queries";
import { useFilters } from "@/app/context/FiltersContext";
import { useParams } from "next/navigation";

import { useApollo } from "@/app/hooks/useApollo";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { useQuestIcons } from "@/app/hooks/useQuestIcons";
import { useCompleted } from "@/app/hooks/useCompleted";
import QuestTreeRenderer from "@/app/components/quest/QuestTreeRenderer";
import { useQuestGrouping } from "@/app/hooks/useQuestGrouping";
import { useMemo } from "react";
import { extractList } from "@/app/hooks/extractList";
import { Quest } from "@/app/types/quest";

export default function QuestList() {
	const { filters } = useFilters();
	const { search, sort } = filters;
	const params = useParams();
	const game = params.game as string;
	const query = filters.searchTags ? GET_QUESTS_WITH_TAGS : GET_QUESTS_NO_TAGS;
	const { data } = useApollo(query, { search, game });
	const quests = useMemo(() => extractList<Quest>(data, "quests"), [data]);
	const { activeQuestId, setActiveQuestId } = useActiveQuest();
	const { toggle, isCompleted } = useCompleted(game, "quests");
	const { getTypeIcon, getLocationIcon } = useQuestIcons();

	const tree = useQuestGrouping(quests, filters, {
		getTypeIcon,
		getLocationIcon
	});

	return (
		<div className='w-full px-3 gap-8 flex flex-col items-center'>
			<QuestTreeRenderer nodes={tree} sort={sort} isCompleted={isCompleted} toggle={toggle} activeQuestId={activeQuestId} setActiveQuestId={setActiveQuestId} />
		</div>
	);
}
