"use client";

import { GET_QUESTS_NO_TAGS, GET_QUESTS_WITH_TAGS } from "@/app/lib/queries";
import { GetQuestsData, GetQuestsVars, Quest } from "@/app/types/quest";
import { useQuery } from "@apollo/client/react";
import { useCallback, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Section from "@/app/components/quest/Section";
import { useFilters } from "@/app/context/FiltersContext";
import { useCompleted } from "@/app/hooks/useCompleted";
import WitcherModal from "@/app/components/quest-modal/WitcherModal";
import CyberpunkModal from "@/app/components/quest-modal/CyberpunkModal";
import { motion } from "framer-motion";

export default function QuestList() {
	const { filters } = useFilters();
	const { search, groupByType, groupByLocation, groupByAct, groupByQuestGroup, sort, searchTags } = filters;

	const query = searchTags ? GET_QUESTS_WITH_TAGS : GET_QUESTS_NO_TAGS;

	const params = useParams();
	const game = params.game as string;

	const { toggle, isCompleted } = useCompleted(game, "quests");

	const countCompleted = (quests: Quest[]) => quests.filter((q) => isCompleted(q.uuid)).length;

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

			if (uuid) params.set("activeQuest", uuid);
			else params.delete("activeQuest");

			router.replace(`?${params.toString()}`);
		},
		[router, searchParams]
	);

	const quests = useMemo(() => {
		return data?.quests ?? previousData?.quests ?? [];
	}, [data, previousData]);

	const sortList = (list: Quest[]) => {
		const copy = [...list];

		return copy.sort((a, b) => {
			const aDone = isCompleted(a.uuid);
			const bDone = isCompleted(b.uuid);

			if (aDone !== bDone) return aDone ? 1 : -1;

			switch (sort) {
				case "az":
					return a.title.localeCompare(b.title);
				case "za":
					return b.title.localeCompare(a.title);
				case "levelAsc":
					return a.level - b.level;
				case "levelDesc":
					return b.level - a.level;
				default:
					return 0;
			}
		});
	};

	const modalMap = {
		witcher3: WitcherModal,
		cyberpunk2077: CyberpunkModal
	} as const;

	const ModalComponent = modalMap[game as keyof typeof modalMap] ?? WitcherModal;

	const renderQuest = (quest: Quest) => (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: -5 },
				visible: { opacity: 1, y: 0 }
			}}
			transition={{ type: "spring", stiffness: 300, damping: 25 }}
			whileTap={{ scale: 0.97 }}
			key={quest.uuid}
			layout
		>
			<ModalComponent
				key={quest.uuid}
				uuid={quest.uuid}
				activeQuestId={activeQuestId}
				setActiveQuestId={setActiveQuestId}
				title={quest.title}
				type={quest.quest_type}
				desc={quest.description}
				level={quest.level}
				location={quest.location.name}
				tags={quest.tags.map((t) => t.name)}
				search={search}
				searchTags={searchTags}
				rewards={quest.rewards}
				isCompleted={isCompleted(quest.uuid)}
				toggleCompleted={() => toggle(quest.uuid)}
				locationImage={`http://localhost:1337${quest.location?.banner?.url}`}
				mapImage={`http://localhost:1337${quest.location?.minimap?.url}`}
				characterImage={`http://localhost:1337${quest.character?.image?.url}`}
				requirements={quest.requirement}
			/>
		</motion.div>
	);

	function renderSection(
		title: string,
		list: Quest[],

		options?: {
			icon?: string;
			variant?: "location";
			children?: React.ReactNode;
			level?: number;
		}
	) {
		const sorted = sortList(list);
		return (
			<div key={title} className='w-full py-4'>
				<Section title={title} level={options?.level} count={sorted.length} completed={countCompleted(sorted)} icon={options?.icon} variant={options?.variant}>
					<motion.div layout className='flex flex-col gap-2'>
						{options?.children ?? sorted.map(renderQuest)}
					</motion.div>
				</Section>
			</div>
		);
	}

	const groupBy = <T, K extends string>(list: T[], getKey: (item: T) => K): Record<K, T[]> => {
		return list.reduce(
			(acc, item) => {
				const key = getKey(item);
				(acc[key] ??= []).push(item);
				return acc;
			},
			{} as Record<K, T[]>
		);
	};

	const BASE_URL = "http://localhost:1337";

	const getTypeIcon = (list: Quest[]) => (list[0]?.quest_type?.icon?.url ? `${BASE_URL}${list[0].quest_type.icon.url}` : undefined);

	const getLocationIcon = (list: Quest[]) => (list[0]?.location?.banner?.url ? `${BASE_URL}${list[0].location.banner.url}` : undefined);

	return (
		<div className='w-full px-3 flex flex-col items-center'>
			{/* SEARCH */}
			{search && renderSection("Search results", quests, { level: 0 })}

			{/* QUEST GROUP  */}
			{!search &&
				groupByQuestGroup &&
				Object.entries(
					groupBy(
						quests.flatMap((q) => (q.quest_groups?.length ? q.quest_groups.map((g) => ({ ...q, __group: g.title })) : [{ ...q, __group: "Other" }])),
						(q) => q.__group
					)
				).map(([group, list]) => renderSection(group, list, { level: 0 }))}

			{/* ACT */}
			{!search &&
				!groupByQuestGroup &&
				groupByAct &&
				Object.entries(groupBy(quests, (q) => q.quest_act?.title ?? "Unknown act")).map(([act, actList]) => {
					// ACT only
					if (!groupByLocation && !groupByType) {
						return renderSection(act, actList, { level: 0 });
					}

					// ACT → LOCATION
					if (groupByLocation && !groupByType) {
						const byLoc = groupBy(actList, (q) => q.location?.name ?? "Unknown location");

						return renderSection(act, actList, {
							children: Object.entries(byLoc).map(([loc, list]) => renderSection(loc, list, { variant: "location", level: 1, icon: getLocationIcon(list) }))
						});
					}

					// ACT → TYPE
					if (!groupByLocation && groupByType) {
						const byType = groupBy(actList, (q) => q.quest_type?.name ?? "Other");

						return renderSection(act, actList, {
							children: Object.entries(byType).map(([type, list]) => renderSection(type, list, { level: 1, icon: getTypeIcon(list) }))
						});
					}

					// ACT → LOCATION → TYPE
					const byLoc = groupBy(actList, (q) => q.location?.name ?? "Unknown location");

					return renderSection(act, actList, {
						children: Object.entries(byLoc).map(([loc, locList]) => {
							const byType = groupBy(locList, (q) => q.quest_type?.name ?? "Other");

							return renderSection(loc, locList, {
								variant: "location",
								level: 1,
								icon: getLocationIcon(locList),
								children: Object.entries(byType).map(([type, list]) => renderSection(type, list, { level: 1, icon: getTypeIcon(list) }))
							});
						})
					});
				})}

			{/* LOCATION */}
			{!search &&
				!groupByQuestGroup &&
				!groupByAct &&
				groupByLocation &&
				!groupByType &&
				Object.entries(groupBy(quests, (q) => q.location?.name ?? "Unknown location")).map(([loc, list]) =>
					renderSection(loc, list, { variant: "location", level: 0, icon: getLocationIcon(list) })
				)}

			{/* LOCATION + TYPE */}
			{!search &&
				!groupByQuestGroup &&
				!groupByAct &&
				groupByLocation &&
				groupByType &&
				Object.entries(groupBy(quests, (q) => q.location?.name ?? "Unknown location")).map(([loc, locList]) => {
					const byType = groupBy(locList, (q) => q.quest_type?.name ?? "Other");

					return renderSection(loc, locList, {
						variant: "location",
						level: 0,
						icon: getLocationIcon(locList),
						children: Object.entries(byType).map(([type, list]) => renderSection(type, list, { level: 1, icon: getTypeIcon(list) }))
					});
				})}

			{/* TYPE */}
			{!search &&
				!groupByQuestGroup &&
				!groupByAct &&
				!groupByLocation &&
				groupByType &&
				Object.entries(groupBy(quests, (q) => q.quest_type?.name ?? "Other")).map(([type, list]) => renderSection(type, list, { level: 0, icon: getTypeIcon(list) }))}

			{/* ALL */}
			{!search && !groupByQuestGroup && !groupByAct && !groupByLocation && !groupByType && renderSection("All quests", quests, { level: 0 })}
		</div>
	);
}
