"use client";

import Image from "next/image";
import { Dialog } from "radix-ui";
import dandelion from "../../../public/assets/dandelion.webp";
import skellige from "../../../public/assets/skellige.png";
import skellige_mini from "../../../public/assets/skellige_mini.webp";
import Quest from "@/app/components/quest/Quest";

export default function Modal() {
	return (
		<Dialog.Root>
			<Dialog.Trigger className='w-full flex items-center justify-center'>
				<Quest />
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
					<div
						className='
          border-r border-zinc-700
          flex items-center justify-center
          bg-zinc-900 h-full
          '
					>
						<div className='text-center h-full'>
							<Image src={dandelion} alt='portrait' className='w-full object-cover h-full ' />
						</div>
					</div>

					<div className='relative '>
						<Dialog.Title className='text-2xl px-6 py-4 bg-red-700 font-bold tracking-wide text-white'>TITLE</Dialog.Title>

						<div className='flex gap-3 items-center px-3 pt-3 bg-zinc-900'>
							<p className='text-sm border-r border-gray-400 pr-3 text-yellow-400 mb-4'>Main quest</p>
							<div className='flex gap-2'>
								<p className='text-sm text-gray-400 mb-4'>Skellige</p>
								<Image src={skellige} className='w-6.25 h-6.25 object-contain' alt='location' />
							</div>
						</div>

						<Dialog.Description className='text-sm leading-relaxed p-3 text-gray-300'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra massa ut turpis bibendum, vitae convallis velit luctus. Curabitur tristique sem sit amet
							augue tempor, non malesuada justo dictum.
							<br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis luctus ipsum. Suspendisse potenti.
						</Dialog.Description>

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

					<div
						className='
          border-t border-zinc-700

          bg-zinc-950 overflow-hidden
          '
					>
						<div className='text-gray-500 text-sm  opacity-60 h-full p-1 bg-zinc-800 hover:opacity-100 cursor-pointer transition'>
							<Image src={skellige_mini} className='h-full w-full' alt='map' />
						</div>
					</div>

					<div
						className='
          border-t border-r border-zinc-700
          p-5 bg-zinc-900
          '
					>
						<h3 className='font-semibold text-gray-300 mb-2'>REWARDS</h3>

						<div className='flex gap-2 mt-4'>
							<div className='flex items-center justify-center'>
								<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>XP</span>
								<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>100</span>
							</div>
							<div className='flex items-center justify-center'>
								<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>Gold</span>
								<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>100</span>
							</div>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
