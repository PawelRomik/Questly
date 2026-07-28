import ProgressBar from "@/app/components/section/ProgressBar";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed: number;
	total: number;
	game?: string;
};

export function SectionProgress({ completed, total, game }: Props) {
	const theme = getTheme("section", game);
	return (
		<div className={theme.section.progress()}>
			<ProgressBar game={game} completed={completed} total={total} />
		</div>
	);
}
