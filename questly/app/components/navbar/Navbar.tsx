"use client";

import DesktopNavbar from "@/app/components/navbar/DesktopNavbar";
import MobileNavbar from "@/app/components/navbar/MobileNavbar";
import { Game } from "@/app/types/quest";

type Props = {
	game: Game;
};

export default function Navbar({ game }: Props) {
	return (
		<>
			<div className='hidden lg:block'>
				<DesktopNavbar game={game} />
			</div>

			<div className='lg:hidden'>
				<MobileNavbar game={game} />
			</div>
		</>
	);
}
