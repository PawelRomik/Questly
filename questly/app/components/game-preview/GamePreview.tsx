"use client";

import { Game } from "@/app/(pages)/[locale]/page";
import PreviewBanner from "@/app/components/game-preview/PreviewBanner";
import PreviewButton from "@/app/components/game-preview/PreviewButton";
import PreviewDesc from "@/app/components/game-preview/PreviewDesc";
import PreviewStatistics from "@/app/components/game-preview/PreviewStatistics";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: Game;
};

export default function GamePreview({ game }: Props) {
	if (!game) return null;
	const theme = getTheme("preview", game.slug);
	return (
		<div className={theme.container()}>
			<PreviewBanner game={game} />
			<PreviewDesc game={game} />
			<PreviewStatistics game={game} />
			<PreviewButton game={game} />
		</div>
	);
}
