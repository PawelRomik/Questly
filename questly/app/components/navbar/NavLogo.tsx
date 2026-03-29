"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { GAME_THEME } from "@/app/data/games";

export default function NavLogo() {
	const params = useParams();
	const game = params.game as keyof typeof GAME_THEME;

	const theme = GAME_THEME[game] ?? GAME_THEME.default;

	return (
		<div
			className={`
				flex-1 flex items-center p-2 group justify-center overflow-hidden cursor-pointer
				${theme.bg}
				hover:brightness-150
			`}
		>
			<Image src={theme.logo} alt={theme.name} className='h-full w-20 object-contain group-hover:scale-110 transition' />
		</div>
	);
}
