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

const locationImages: Record<string, StaticImageData> = {
	Skellige: skellige
};

export default function QuestList() {
	const typedQuests = quests as Quest[];

	return (
		<div className='w-full px-3 gap-5 flex-col items-center flex justify-center'>
			{typedQuests.map((quest, index) => (
				<Modal
					key={index}
					title={quest.title}
					type={quest.type}
					desc={quest.desc}
					level={quest.level}
					tags={quest.tags}
					rewards={quest.rewards}
					locationImage={locationImages[quest.location]}
					mapImage={skellige_mini}
					characterImage={dandelion}
				/>
			))}
		</div>
	);
}
