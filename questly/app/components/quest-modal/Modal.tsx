"use client";

import { Dialog } from "radix-ui";
import Quest from "@/app/components/quest/Quest";

import { ModalCharacter } from "./ModalCharacter";
import { ModalHeader } from "./ModalHeader";
import { ModalMeta } from "./ModalMeta";
import { ModalMap } from "./ModalMap";
import { ModalRewards } from "./ModalRewards";
import { Requirement, Rewards } from "@/app/types/quest";
import { RequirementsList } from "@/app/components/quest-modal/RequirementsList";
import { QuestButton } from "@/app/components/quest/QuestButton";

type ModalProps = {
	title: string;
	type: string;
	desc: string;
	level: number;
	tags: string[];
	rewards: Rewards;
	locationImage: string;
	mapImage: string;
	characterImage: string;
	search: string;
	searchTags: boolean;
	uuid: string;
	activeQuestId: string | null;
	setActiveQuestId: (id: string | null) => void;
	isCompleted: boolean;
	toggleCompleted: () => void;
	requirements: Requirement[];
};

export default function Modal({
	uuid,
	setActiveQuestId,
	activeQuestId,
	title,
	type,
	desc,
	level,
	search,
	tags,
	searchTags,
	locationImage,
	mapImage,
	characterImage,
	rewards,
	isCompleted,
	toggleCompleted,
	requirements
}: ModalProps) {
	const isOpen = activeQuestId === uuid && uuid !== null;

	return (
		<Dialog.Root
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) setActiveQuestId(null);
			}}
		>
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
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/70 backdrop-blur-sm' />

				<Dialog.Content
					className='fixed left-1/2 top-1/2 w-225 h-130 -translate-x-1/2 -translate-y-1/2
	bg-linear-to-b from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl
	shadow-[0_0_30px_rgba(0,0,0,0.8)]
	text-gray-200 overflow-hidden
	grid grid-cols-[200px_3fr_1fr] 
	grid-rows-[auto_auto_1fr_100px_70px]'
				>
					{/* CHARACTER */}
					<div className='row-[1/4] col-[1] border-r border-zinc-700'>
						<ModalCharacter src={characterImage} />
					</div>

					{/* MAP */}
					<div className='row-[4] col-[1] border-r border-t border-zinc-700'>
						<ModalMap src={mapImage} />
					</div>

					{/* TITLE */}
					<div className='col-[2/4] row-[1] border-b border-zinc-700'>
						<ModalHeader title={title} />
					</div>

					{/* TYPE */}
					<div className='col-[2/4] row-[2] border-b border-zinc-700'>
						<ModalMeta uuid={uuid} type={type} tags={tags} locationImage={locationImage} />
					</div>

					{/* DESC */}
					<div className='col-[2] row-[3] p-3 border-r border-zinc-700'>
						<Dialog.Description className='text-sm text-gray-300'>{desc}</Dialog.Description>
					</div>

					{/* REQUIREMENTS (ciągnie się przez 2 rzędy) */}
					<div className='col-[3] row-[3/5] border-l border-zinc-700 p-3'>
						<RequirementsList requirements={requirements} />
					</div>

					{/* REWARDS */}
					<div className='col-[2] row-[4] p-3 border-t border-zinc-700'>
						<ModalRewards rewards={rewards} />
					</div>

					{/* FOOTER */}
					<div className='col-[1/4] row-[5] border-t border-zinc-700 flex items-center justify-end gap-4 px-4'>
						{/* COMPLETE */}
						<QuestButton completed={isCompleted} onClick={toggleCompleted} />

						{/* NEXT QUEST */}
						<button className='px-4 py-2 bg-red-700 hover:bg-red-600 rounded'>next quest</button>
					</div>

					{/* CLOSE */}
					<Dialog.Close asChild>
						<button className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded bg-zinc-800 hover:bg-red-600 transition'>✕</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
