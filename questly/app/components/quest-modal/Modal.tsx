"use client";

import { Dialog } from "radix-ui";
import Quest from "@/app/components/quest/Quest";

import { ModalCharacter } from "./ModalCharacter";
import { ModalHeader } from "./ModalHeader";
import { ModalMeta } from "./ModalMeta";
import { ModalMap } from "./ModalMap";
import { ModalRewards } from "./ModalRewards";

type Rewards = {
	xp: number;
	money: number;
	items: string[];
};

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
};

export default function Modal({ title, type, desc, level, search, tags, searchTags, locationImage, mapImage, characterImage, rewards }: ModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger className='w-full flex items-center justify-center'>
				<Quest title={title} searchTags={searchTags} search={search} shortDesc={desc.slice(0, 60) + "..."} level={level} tags={tags} locationImage={locationImage} />
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
