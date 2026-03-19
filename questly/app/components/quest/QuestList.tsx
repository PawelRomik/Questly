"use client";

import { GET_QUESTS } from "@/app/lib/queries";
import dandelion from "../../../public/assets/dandelion.webp";
import skellige from "../../../public/assets/skellige.png";
import skellige_mini from "../../../public/assets/skellige_mini.webp";

import { StaticImageData } from "next/image";
import { GetQuestsData, GetQuestsVars, Quest } from "@/app/types/quest";
import { useQuery } from "@apollo/client/react";
import Modal from "@/app/components/quest-modal/Modal";

type QuestListProps = {
	search: string;
	groupByType: boolean;
	sort: string;
	searchTags: boolean;
};

const locationImages: Record<string, StaticImageData> = {
	Skellige: skellige
};

export default function QuestList({ search, groupByType, sort }: QuestListProps) {
	const { data, loading } = useQuery<GetQuestsData, GetQuestsVars>(GET_QUESTS, {
		variables: { search }
	});

	if (loading) return <p>Loading...</p>;

	const quests = data?.quests ?? [];

	const sortQuests = (list: Quest[]): Quest[] => {
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
	};

	const groupedQuests = quests.reduce<Record<string, Quest[]>>((acc, quest) => {
		const type = quest.quest_type?.name ?? "Other";

		if (!acc[type]) acc[type] = [];
		acc[type].push(quest);

		return acc;
	}, {});

	const renderModal = (quest: Quest, key: string | number) => {
		const locationName = quest.location?.Name ?? "";

		return (
			<Modal
				key={key}
				title={quest.Title}
				type={quest.quest_type?.name ?? "Unknown"}
				desc={quest.Desc}
				level={quest.level}
				tags={quest.tags.map((t) => t.name)}
				rewards={quest.rewards}
				locationImage={locationImages[locationName]}
				mapImage={skellige_mini}
				characterImage={dandelion}
			/>
		);
	};

	if (!groupByType) {
		const sorted = sortQuests([...quests]);

		return <div className='w-full px-3 flex flex-col items-center gap-5'>{sorted.map((quest, i) => renderModal(quest, i))}</div>;
	}

	return (
		<div className='w-full px-3 flex flex-col items-center gap-8'>
			{Object.entries(groupedQuests).map(([type, quests]) => {
				const sorted = sortQuests([...quests]);

				return (
					<div key={type} className='w-full max-w-xl flex flex-col gap-4'>
						<h2 className='text-lg font-semibold text-red-500 border-b border-zinc-700 pb-1'>{type}</h2>

						{sorted.map((quest, i) => renderModal(quest, `${type}-${i}`))}
					</div>
				);
			})}
		</div>
	);
}
