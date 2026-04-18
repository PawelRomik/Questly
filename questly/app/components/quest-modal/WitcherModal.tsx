"use client";

import { Dialog } from "radix-ui";
import { ModalCharacter } from "@/app/components/quest-modal/ModalCharacter";
import { ModalMeta } from "@/app/components/quest-modal/ModalMeta";
import { ModalRewards } from "@/app/components/quest-modal/ModalRewards";
import { RequirementsList } from "@/app/components/quest-modal/RequirementsList";
import { QuestButton } from "@/app/components/quest/QuestButton";
import { Requirement, Rewards } from "@/app/types/quest";
import { ModalMap } from "@/app/components/quest-modal/ModalMap";
import Quest from "@/app/components/quest/Quest";

type Props = {
	title: string;
	type: string;
	desc: string;
	tags: string[];
	rewards: Rewards;
	locationImage: string;
	mapImage: string;
	characterImage: string;
	uuid: string;
	activeQuestId: string | null;
	setActiveQuestId: (id: string | null) => void;
	isCompleted: boolean;
	toggleCompleted: () => void;
	requirements: Requirement[];
	search: string;
	level: number;
	searchTags: boolean;
};

export default function WitcherModal({
	uuid,
	setActiveQuestId,
	activeQuestId,
	title,
	type,
	desc,
	tags,
	locationImage,
	mapImage,
	characterImage,
	rewards,
	isCompleted,
	toggleCompleted,
	requirements,
	search,
	level,
	searchTags
}: Props) {
	const isOpen = activeQuestId === uuid;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<Dialog.Trigger asChild>
				<div onClick={() => setActiveQuestId(uuid)} className='w-full'>
					<Quest
						completed={isCompleted}
						onToggle={toggleCompleted}
						title={title}
						search={search}
						searchTags={searchTags}
						shortDesc={desc.slice(0, 60) + "..."}
						level={level}
						tags={tags}
						characterImage={characterImage}
						locationImage={locationImage}
					/>
				</div>
			</Dialog.Trigger>{" "}
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/80 backdrop-blur-sm' />

				<Dialog.Content
					className='fixed left-1/2 top-1/2 w-225 h-130
					-translate-x-1/2 -translate-y-1/2
					bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
					border border-[#3a3a3a]
					shadow-[0_0_40px_rgba(0,0,0,0.9)]
					text-gray-200 overflow-hidden
					grid grid-cols-[220px_2fr_1fr]
					grid-rows-[auto_auto_1fr_120px_70px]'
				>
					{/* CHARACTER */}
					<div className='row-[1/4] col-1 border-r border-[#2f2f2f] bg-black/30'>
						<ModalCharacter src={characterImage} />
					</div>

					{/* MAP */}
					<div className='row-4 col-1 border-r border-t border-[#2f2f2f]'>
						<ModalMap src={mapImage} />
					</div>

					{/* TITLE */}
					<div className='col-[2/4] row-1 border-b border-[#3a3a3a] px-4 py-3 bg-[#2a0000]'>
						<h2 className='text-xl font-semibold tracking-wide text-[#e6d3a3]'>{title}</h2>
					</div>

					{/* TYPE */}
					<div className='col-[2/4] row-2 border-b border-[#3a3a3a] px-4 py-2 text-sm text-[#c0b283]'>
						<ModalMeta uuid={uuid} type={type} tags={tags} locationImage={locationImage} />
					</div>

					{/* DESC */}
					<div className='col-2 row-3 p-4 border-r border-[#2f2f2f] text-sm leading-relaxed text-gray-300'>{desc}</div>

					{/* REQUIREMENTS */}
					<div className='col-3 row-[3/5] border-l border-[#2f2f2f] p-4 bg-black/20'>
						<h3 className='text-xs uppercase tracking-wider text-[#a68b5b] mb-2'>Requirements</h3>
						<RequirementsList requirements={requirements} />
					</div>

					{/* REWARDS */}
					<div className='col-2 row-4 p-4 border-t border-[#2f2f2f]'>
						<h3 className='text-xs uppercase tracking-wider text-[#a68b5b] mb-2'>Rewards</h3>
						<ModalRewards rewards={rewards} />
					</div>

					{/* FOOTER */}
					<div className='col-[1/4] row-5 border-t border-[#3a3a3a] flex items-center justify-end gap-4 px-4'>
						<QuestButton completed={isCompleted} onClick={toggleCompleted} />

						<button className='px-4 py-2 bg-[#5a0f0f] hover:bg-[#7a1414] text-[#f5e6c8] rounded-sm border border-[#3a1a1a] transition'>Next quest</button>
					</div>

					{/* CLOSE */}
					<Dialog.Close asChild>
						<button
							className='absolute top-3 right-3 w-8 h-8 flex items-center justify-center
						bg-black/60 border border-[#444]
						hover:bg-[#7a1414] transition'
						>
							✕
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
