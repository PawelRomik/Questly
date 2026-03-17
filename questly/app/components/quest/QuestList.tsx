"use client";

import quests from "@/app/data/witcher3_quests.json";
import Modal from "@/app/components/quest-modal/Modal";

import dandelion from "../../../public/assets/dandelion.webp";
import skellige from "../../../public/assets/skellige.png";
import skellige_mini from "../../../public/assets/skellige_mini.webp";

import { StaticImageData } from "next/image";

type Rewards = {
	xp: number;
	money: number;
	items: string[];
};

type Quest = {
	title: string;
	type: string;
	desc: string;
	level: number;
	tags: string[];
	location: string;
	character: string | null;
	rewards: Rewards;
};

type QuestListProps = {
	search: string;
	groupByType: boolean;
	sort: string;
	searchTags: boolean;
};

const locationImages: Record<string, StaticImageData> = {
	Skellige: skellige
};

export default function QuestList({ search, groupByType, sort, searchTags }: QuestListProps) {
	const typedQuests = quests as Quest[];
	const normalizedSearch = search.toLowerCase();

	const sortQuests = (list: Quest[]) => {
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
	};

	const matched = typedQuests.filter((q) => {
		const titleMatch = q.title.toLowerCase().includes(normalizedSearch);

		if (!searchTags) return titleMatch;

		const tagMatch = q.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

		return titleMatch || tagMatch;
	});

	const unmatched = typedQuests.filter((q) => {
		const titleMatch = q.title.toLowerCase().includes(normalizedSearch);

		const tagMatch = q.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

		return searchTags ? !(titleMatch || tagMatch) : !titleMatch;
	});

	const sortedMatched = sortQuests([...matched]);
	const sortedUnmatched = sortQuests([...unmatched]);

	const groupedQuests = typedQuests.reduce(
		(acc, quest) => {
			if (!acc[quest.type]) acc[quest.type] = [];
			acc[quest.type].push(quest);
			return acc;
		},
		{} as Record<string, Quest[]>
	);

	const highlight = (text: string): React.ReactNode => {
		if (!search.trim()) return text;

		const regex = new RegExp(`(${search})`, "gi");
		const parts = text.split(regex);

		return parts.map((part, i) =>
			part.toLowerCase() === search.toLowerCase() ? (
				<span key={i} className='text-red-600 font-semibold'>
					{part}
				</span>
			) : (
				part
			)
		);
	};

	const highlightTags = (tags: string[]) => {
		if (!searchTags) return tags;
		return tags.map((tag) => highlight(tag));
	};

	const renderModal = (quest: Quest, key: string | number) => (
		<Modal
			key={key}
			title={highlight(quest.title)}
			type={quest.type}
			desc={quest.desc}
			level={quest.level}
			tags={highlightTags(quest.tags)}
			rewards={quest.rewards}
			locationImage={locationImages[quest.location]}
			mapImage={skellige_mini}
			characterImage={dandelion}
		/>
	);

	if (!groupByType) {
		return (
			<div className='w-full px-3 flex flex-col items-center gap-5'>
				{sortedMatched.map((quest, i) => renderModal(quest, `match-${i}`))}

				{search && sortedUnmatched.length > 0 && (
					<div className='w-full max-w-xl flex items-center gap-3 py-4'>
						<div className='flex-1 h-px bg-zinc-700' />
						<span className='text-xs text-zinc-500'>Other quests</span>
						<div className='flex-1 h-px bg-zinc-700' />
					</div>
				)}

				{sortedUnmatched.map((quest, i) => renderModal(quest, `unmatch-${i}`))}
			</div>
		);
	}

	return (
		<div className='w-full px-3 flex flex-col items-center gap-8'>
			{search && sortedMatched.length > 0 && (
				<div className='w-full max-w-xl flex flex-col gap-4'>
					<h2 className='text-lg font-semibold text-yellow-400 border-b border-zinc-700 pb-1'>Search Results</h2>

					{sortedMatched.map((quest, i) => renderModal(quest, `search-${i}`))}
				</div>
			)}

			{Object.entries(groupedQuests).map(([type, quests]) => {
				const filtered = quests.filter((q) => !search || !matched.some((m) => m.title === q.title));

				if (filtered.length === 0) return null;

				const sorted = sortQuests([...filtered]);

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
