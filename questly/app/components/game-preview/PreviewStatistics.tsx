import { Game } from "@/app/(pages)/[locale]/page";
import { StatisticList } from "@/app/components/statistics/StatisticsList";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: Game;
};

export default function PreviewStatistics({ game }: Props) {
	const theme = getTheme("preview", game.slug);
	return (
		<div className={theme.statistics()}>
			<StatisticList hideBtns={true} game={game.slug} />
		</div>
	);
}
