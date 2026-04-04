"use client";

import { GET_QUESTS_NO_TAGS, GET_QUESTS_WITH_TAGS } from "@/app/lib/queries";
import { GetQuestsData, GetQuestsVars, Quest } from "@/app/types/quest";
import { useQuery } from "@apollo/client/react";
import Modal from "@/app/components/quest-modal/Modal";
import { useCallback, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Section from "@/app/components/quest/Section";
import { useFilters } from "@/app/context/FiltersContext";
import { useCompletedQuests } from "@/app/hooks/useCompletedQuests";

type GroupedByType = Record<string, Quest[]>;

type GroupedByLocation = Record<
	string,
	{
		_list?: Quest[];
		[type: string]: Quest[] | undefined;
	}
>;

type GroupedData = GroupedByType | GroupedByLocation | null;

export default function QuestList() {
	const { filters } = useFilters();

	const { search, groupByType, sort, searchTags, groupByLocation } = filters;
	const query = searchTags ? GET_QUESTS_WITH_TAGS : GET_QUESTS_NO_TAGS;

	const params = useParams();
	const game = params.game as string;
	const { toggle, isCompleted } = useCompletedQuests(game);

	const countCompleted = (quests: Quest[]) => {
		return quests.filter((q) => isCompleted(q.uuid)).length;
	};

	const { data, previousData } = useQuery<GetQuestsData, GetQuestsVars>(query, {
		variables: { search, game },
		notifyOnNetworkStatusChange: true
	});

	const router = useRouter();
	const searchParams = useSearchParams();

	const activeQuestId = searchParams.get("activeQuest");
	const setActiveQuestId = useCallback(
		(uuid: string | null) => {
			const params = new URLSearchParams(searchParams.toString());

			if (uuid) {
				params.set("activeQuest", uuid);
			} else {
				params.delete("activeQuest");
			}

			router.replace(`?${params.toString()}`);
		},
		[router, searchParams]
	);

	const quests = useMemo(() => {
		return data?.quests ?? previousData?.quests ?? [];
	}, [data, previousData]);

	const sortedQuests = useMemo(() => {
		const list = [...quests];

		switch (sort) {
			case "az":
				return list.sort((a, b) => a.title.localeCompare(b.title));
			case "za":
				return list.sort((a, b) => b.title.localeCompare(a.title));
			case "levelAsc":
				return list.sort((a, b) => a.level - b.level);
			case "levelDesc":
				return list.sort((a, b) => b.level - a.level);
			default:
				return list;
		}
	}, [quests, sort]);

	const groupedData = useMemo<GroupedData>(() => {
		if (!groupByLocation && !groupByType) return null;

		if (groupByLocation) {
			const result: GroupedByLocation = {};

			sortedQuests.forEach((quest) => {
				const location = quest.location?.name ?? "Unknown location";
				const type = quest.quest_type?.name ?? "Other";

				if (!result[location]) result[location] = {};

				if (groupByType) {
					if (!result[location][type]) result[location][type] = [];
					result[location][type]!.push(quest);
				} else {
					if (!result[location]._list) result[location]._list = [];
					result[location]._list!.push(quest);
				}
			});

			return result;
		}

		const result: GroupedByType = {};

		sortedQuests.forEach((quest) => {
			const type = quest.quest_type?.name ?? "Other";

			if (!result[type]) result[type] = [];
			result[type].push(quest);
		});

		return result;
	}, [sortedQuests, groupByLocation, groupByType]);

	const renderQuest = (quest: Quest) => (
		<Modal
			key={quest.uuid}
			uuid={quest.uuid}
			activeQuestId={activeQuestId}
			setActiveQuestId={setActiveQuestId}
			title={quest.title}
			type={quest.quest_type?.name ?? "Unknown"}
			desc={quest.description}
			level={quest.level}
			tags={quest.tags.map((t) => t.name)}
			search={search}
			searchTags={searchTags}
			rewards={quest.rewards}
			isCompleted={isCompleted(quest.uuid)}
			toggleCompleted={() => toggle(quest.uuid)}
			locationImage={`http://localhost:1337${quest.location?.banner?.url}`}
			mapImage={`http://localhost:1337${quest.location?.minimap?.url}`}
			characterImage={`http://localhost:1337${quest.character?.image?.url}`}
		/>
	);

	return (
		<div className='w-full px-3 flex flex-col items-center gap-6'>
			{!groupByLocation && !groupByType && (
				<div className='w-full max-w-xl'>
					<Section title='All quests' count={sortedQuests.length} completed={countCompleted(sortedQuests)}>
						{sortedQuests.map(renderQuest)}
					</Section>
				</div>
			)}

			{!groupByLocation &&
				groupByType &&
				groupedData &&
				Object.entries(groupedData as GroupedByType).map(([type, list]) => (
					<div key={type} className='w-full max-w-xl'>
						<Section title={type} count={list.length} completed={countCompleted(list)}>
							{list.map(renderQuest)}
						</Section>
					</div>
				))}

			{groupByLocation &&
				!groupByType &&
				groupedData &&
				Object.entries(groupedData as GroupedByLocation).map(([location, data]) => {
					const list = data._list ?? [];

					return (
						<div key={location} className='w-full max-w-xl'>
							<Section title={location} count={list.length} completed={countCompleted(list)}>
								{list.map(renderQuest)}
							</Section>
						</div>
					);
				})}

			{groupByLocation &&
				groupByType &&
				groupedData &&
				Object.entries(groupedData as GroupedByLocation).map(([location, types]) => {
					const all = Object.values(types)
						.filter((v): v is Quest[] => Array.isArray(v))
						.flat();

					return (
						<div key={location} className='w-full max-w-xl flex flex-col gap-3'>
							<Section title={location} count={all.length} completed={countCompleted(all)}>
								{Object.entries(types).map(([type, list]) => {
									if (type === "_list" || !list) return null;

									return (
										<Section key={type} title={type} count={list.length} completed={countCompleted(list)}>
											{list.map(renderQuest)}
										</Section>
									);
								})}
							</Section>
						</div>
					);
				})}
		</div>
	);
}
