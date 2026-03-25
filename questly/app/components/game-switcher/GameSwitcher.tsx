"use client";

import { Dialog } from "radix-ui";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/app/components/navbar/NavLogo";
import witcher from "../../../public/assets/witcher.png";
import cyberpunk from "../../../public/assets/cyberpunk.png";

const games = [
	{
		name: "Witcher 3",
		slug: "witcher3",
		icon: witcher
	},
	{
		name: "Cyberpunk 2077",
		slug: "cyberpunk2077",
		icon: cyberpunk
	}
];

export default function GameSwitcher() {
	return (
		<Dialog.Root>
			<Dialog.Trigger className='flex'>
				<NavLogo />
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/70 backdrop-blur-sm z-40' />

				<Dialog.Content className='fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#0b0b0f] border border-neutral-800 shadow-2xl p-6'>
					<Dialog.Title className='text-xl font-semibold text-white mb-6 text-center tracking-wide'>Select Game</Dialog.Title>

					<div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
						{games.map((game) => (
							<Link key={game.slug} href={`/${game.slug}/quests`} className='group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-900 transition'>
								<div className='relative w-16 h-16'>
									<Image src={game.icon} alt={game.name} fill className='object-contain group-hover:scale-110 transition' />
								</div>

								<span className='text-sm text-neutral-300 group-hover:text-white text-center'>{game.name}</span>
							</Link>
						))}
					</div>

					<Dialog.Close asChild>
						<button className='absolute top-3 right-3 text-neutral-400 hover:text-white'>✕</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
