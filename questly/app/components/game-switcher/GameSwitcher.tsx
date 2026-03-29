"use client";

import { Dialog } from "radix-ui";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/app/components/navbar/NavLogo";
import { GAME_THEME } from "@/app/data/games";

export default function GameSwitcher() {
	const games = Object.values(GAME_THEME);

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
						{games
							.filter((game) => game.slug !== "questly")
							.map((game) => (
								<Link key={game.slug} href={`/${game.slug}/quests`} className='group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-900 transition'>
									<div className='relative w-16 h-16'>
										<Image src={game.logo} alt={game.name} fill className='object-contain group-hover:scale-110 transition' />
									</div>

									<span className='text-sm text-white group-hover:brightness-125 text-center'>{game.name}</span>
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
