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
				w-full flex items-center p-2 group justify-center overflow-hidden cursor-pointer
				bg-linear-to-b from-[#202020] to-[#161616] relative
				 after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-4/7
  after:h-5/6
  after:bg-linear-to-t
  after:from-yellow-500/80 after:via-yellow-400/40
  after:to-transparent
  after:blur-2xl
  after:opacity-0
  after:transition
  hover:after:opacity-100
			`}
		>
			<Image src={theme.logo} alt={theme.name} className='h-full w-20 z-30 object-contain group-hover:scale-110 transition' />
		</div>
	);
}
