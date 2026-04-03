"use client";

import { Dialog } from "radix-ui";
import Quest from "@/app/components/quest/Quest";

import { ModalCharacter } from "./ModalCharacter";
import { ModalHeader } from "./ModalHeader";
import { ModalMeta } from "./ModalMeta";
import { ModalMap } from "./ModalMap";
import { ModalRewards } from "./ModalRewards";
import { Rewards } from "@/app/types/quest";

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
	rewards
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
					<Quest title={title} search={search} searchTags={searchTags} shortDesc={desc.slice(0, 60) + "..."} level={level} tags={tags} locationImage={locationImage} />
				</div>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/70 backdrop-blur-sm' />

				<Dialog.Content
					className='fixed left-1/2 top-1/2 w-225 h-130 -translate-x-1/2 -translate-y-1/2
					bg-linear-to-b from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl
					shadow-[0_0_30px_rgba(0,0,0,0.8)]
					grid grid-cols-[200px_1fr] grid-rows-[1fr_150px] overflow-hidden text-gray-200'
				>
					<ModalCharacter src={characterImage} />

					<div className='relative'>
						<ModalHeader title={title} />

						<ModalMeta type={type} tags={tags} locationImage={locationImage} />

						<Dialog.Description className='text-sm leading-relaxed p-3 text-gray-300'>{desc}</Dialog.Description>

						<Dialog.Close asChild>
							<button className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded bg-zinc-800 hover:bg-red-600 transition'>✕</button>
						</Dialog.Close>
					</div>

					<ModalMap src={mapImage} />

					<ModalRewards rewards={rewards} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
