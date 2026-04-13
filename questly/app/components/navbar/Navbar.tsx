"use client";

import { useState } from "react";
import { NavDecor } from "./NavDecor";
import { NavMenu } from "./NavMenu";
import { GAME_THEME } from "@/app/data/games";
import GameSwitcher from "@/app/components/game-switcher/GameSwitcher";
import { useParams } from "next/navigation";

export const NAV_BG = "bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)]";

export default function Navbar() {
	const [active, setActive] = useState<"left" | "right" | null>(null);
	const params = useParams();
	const game = params.game as keyof typeof GAME_THEME;

	const theme = GAME_THEME[game] ?? GAME_THEME.default;

	return (
		<nav className='w-full sticky z-10 top-0  left-0 flex shadow-2xl text-2xl font-bold h-24'>
			<div className='bg-[rgba(0,0,0,0.5)]'>
				<NavDecor theme={theme} side='left' active={active} />
			</div>

			<div className={`flex-1 flex items-center ${theme.border} border-b-4 ${theme.bg}`}>
				<div className='flex w-full  h-full overflow-hidden'>
					<NavMenu theme={theme} side='left' active={active} setActive={setActive} />

					<GameSwitcher />

					<NavMenu theme={theme} side='right' active={active} setActive={setActive} />
				</div>
			</div>

			<NavDecor theme={theme} side='right' active={active} />
		</nav>
	);
}
