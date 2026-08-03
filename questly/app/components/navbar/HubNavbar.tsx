"use client";
import GameSwitcher from "@/app/components/switchers/GameSwitcher";
import LocaleSwitcher from "@/app/components/switchers/LocaleSwitcher";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export default function HubNavbar({ game }: Props) {
	const theme = getTheme("navbar", game);

	return (
		<nav className={theme.base(true)}>
			<div className={theme.content.base()}>
				<div className={theme.content.contentWrapper()}>
					<div className='absolute left-5 h-full flex items-center justify-center  top-0 z-40'>
						<LocaleSwitcher />
					</div>

					<GameSwitcher game={game} />
				</div>
			</div>
		</nav>
	);
}
