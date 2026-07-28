"use client";
import GameSwitcher from "@/app/components/switchers/GameSwitcher";
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
					<GameSwitcher game={game} />
				</div>
			</div>
		</nav>
	);
}
