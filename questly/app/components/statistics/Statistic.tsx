import { useCompleted } from "@/app/context/CompletedContext";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	label: string;
	total: number;
	completed: number;
	type: "quests" | "achievements" | "collections" | "mapMarkers";
	game?: string;
};

export function Statistic({ label, total, completed, type, game = "questly" }: Props) {
	const theme = getTheme("statistic", game);
	const t = useTranslations("common");
	const { reset } = useCompleted(game, type);

	return (
		<li className={theme.stat.base()}>
			<div className={theme.stat.item.left()}>
				<span className={theme.stat.item.dot()} />

				<span className={theme.stat.item.label()}>{label}</span>
			</div>

			<div className={theme.stat.item.right()}>
				<span className={theme.stat.item.counter(completed === total)}>
					{completed}/{total}
				</span>

				<button onClick={reset} className={theme.stat.item.button()}>
					{t("reset")}
				</button>
			</div>
		</li>
	);
}
