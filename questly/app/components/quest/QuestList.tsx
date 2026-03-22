"use client";

import { GET_QUESTS_NO_TAGS, GET_QUESTS_WITH_TAGS } from "@/app/lib/queries";
import { GetQuestsData, GetQuestsVars, Quest } from "@/app/types/quest";
import { useQuery } from "@apollo/client/react";
import Modal from "@/app/components/quest-modal/Modal";
import { useMemo } from "react";
import { QuestListProps } from "@/app/components/quest/types";

export default function QuestList({ search, groupByType, sort, searchTags }: QuestListProps) {
	const query = searchTags ? GET_QUESTS_WITH_TAGS : GET_QUESTS_NO_TAGS;

	const { data, previousData } = useQuery<GetQuestsData, GetQuestsVars>(query, {
		variables: { search },
		notifyOnNetworkStatusChange: true
	});

	const quests = useMemo(() => {
		return data?.quests ?? previousData?.quests ?? [];
	}, [data, previousData]);

	const sortedQuests = useMemo(() => {
		const list = [...quests];

		switch (sort) {
			case "az":
				return list.sort((a, b) => a.Title.localeCompare(b.Title));
			case "za":
				return list.sort((a, b) => b.Title.localeCompare(a.Title));
			case "levelAsc":
				return list.sort((a, b) => a.level - b.level);
			case "levelDesc":
				return list.sort((a, b) => b.level - a.level);
			default:
				return list;
		}
	}, [quests, sort]);

	const groupedQuests = useMemo(() => {
		return sortedQuests.reduce<Record<string, Quest[]>>((acc, quest) => {
			const type = quest.quest_type?.name ?? "Other";

			if (!acc[type]) acc[type] = [];
			acc[type].push(quest);

			return acc;
		}, {});
	}, [sortedQuests]);

	const renderQuest = (quest: Quest) => (
		<Modal
			key={quest.id}
			title={quest.Title}
			type={quest.quest_type?.name ?? "Unknown"}
			desc={quest.Desc}
			level={quest.level}
			tags={quest.tags.map((t) => t.name)}
			search={search}
			rewards={quest.rewards}
			searchTags={searchTags}
			locationImage={`http://localhost:1337${quest.location?.banner?.url}`}
			mapImage={`http://localhost:1337${quest.location?.minimap?.url}`}
			characterImage={`http://localhost:1337${quest.character?.Image?.url}`}
		/>
	);

	return (
		<div className='w-full px-3 flex flex-col items-center gap-6'>
			{!groupByType && <div className='w-full max-w-xl flex flex-col gap-5'>{sortedQuests.map(renderQuest)}</div>}

			{groupByType &&
				Object.entries(groupedQuests).map(([type, list]) => (
					<div key={type} className='w-full max-w-xl flex flex-col gap-4'>
						<h2 className='text-lg font-semibold text-red-500 border-b border-zinc-700 pb-1'>{type}</h2>

						{list.map(renderQuest)}
					</div>
				))}
		</div>
	);
}
