"use client";

import Image from "next/image";
import { Dialog } from "radix-ui";
import Quest from "@/app/components/quest/Quest";

type Rewards = {
	xp: number;
	money: number;
	items: string[];
};

type ModalProps = {
	title: React.ReactNode;
	type: string;
	desc: string;
	level: number;
	tags: React.ReactNode[];
	rewards: Rewards;
	locationImage: string;
	mapImage: string;
	characterImage: string;
};

export default function Modal({ title, type, desc, level, tags, locationImage, mapImage, characterImage, rewards }: ModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger className='w-full flex items-center justify-center'>
				<Quest title={title} shortDesc={desc.slice(0, 60) + "..."} level={level} tags={tags} locationImage={locationImage} />
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/70 backdrop-blur-sm' />

				<Dialog.Content
					className='
        fixed left-1/2 top-1/2
        w-225 h-130
        -translate-x-1/2 -translate-y-1/2
        
        bg-linear-to-b from-zinc-800 to-zinc-900
        border border-zinc-700
        rounded-xl
        shadow-[0_0_30px_rgba(0,0,0,0.8)]
        
        grid grid-cols-[200px_1fr]
        grid-rows-[1fr_150px]
        overflow-hidden
        text-gray-200
        '
				>
					<div className='border-r border-zinc-700 flex items-center justify-center bg-zinc-900 h-full'>
						<Image unoptimized width={1000} height={1000} src={characterImage} alt='portrait' className='w-full object-cover h-full' />
					</div>

					<div className='relative'>
						<Dialog.Title className='text-2xl px-6 py-4 bg-red-700 font-bold tracking-wide text-white'>{title}</Dialog.Title>

						<div className='flex gap-3 items-center px-3 pt-3 bg-zinc-900'>
							<p className='text-sm border-r border-gray-400 pr-3 text-yellow-400 mb-4'>{type}</p>

							<div className='flex gap-2 items-center'>
								<p className='text-sm text-gray-400 mb-4'>{tags.find((t) => t !== type) || "Skellige"}</p>
								<Image unoptimized width={1000} height={1000} src={locationImage} className='w-6.25 h-6.25 object-contain' alt='location' />
							</div>
						</div>

						<Dialog.Description className='text-sm leading-relaxed p-3 text-gray-300'>{desc}</Dialog.Description>

						<Dialog.Close asChild>
							<button
								className='
              absolute top-4 right-4
              w-8 h-8
              flex items-center justify-center
              rounded
              bg-zinc-800
              cursor-pointer
              hover:bg-red-600
              transition
              '
							>
								✕
							</button>
						</Dialog.Close>
					</div>

					<div className='border-t border-zinc-700 bg-zinc-950 overflow-hidden'>
						<div className='text-gray-500 text-sm opacity-60 h-full p-1 bg-zinc-800 hover:opacity-100 cursor-pointer transition'>
							<Image unoptimized width={1000} height={1000} src={mapImage} className='h-full w-full object-cover' alt='map' />
						</div>
					</div>

					<div className='border-t border-r border-zinc-700 p-5 bg-zinc-900'>
						<h3 className='font-semibold text-gray-300 mb-2'>REWARDS</h3>

						<div className='flex gap-2 mt-4'>
							<div className='flex items-center justify-center'>
								<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>XP</span>
								<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>{rewards.xp}</span>
							</div>

							<div className='flex items-center justify-center'>
								<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>Gold</span>
								<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>{rewards.money}</span>
							</div>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
