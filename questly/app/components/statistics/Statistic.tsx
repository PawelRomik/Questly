import { statisticVariants } from "@/app/components/statistics/variant/statisticVariants";
import { useCompleted } from "@/app/context/CompletedContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

type Props = {
	label: string;
	total: number;
	completed: number;
	type: "quests" | "achievements" | "collections" | "mapMarkers";
};

export function Statistic({ label, total, completed, type }: Props) {
	const styles = useGameStyles(statisticVariants);
	const t = useTranslations("common");
	const { game } = useParams<{ game: string }>();
	const { reset } = useCompleted(game, type);

	return (
		<li className={styles.stat.base()}>
			<div className={styles.stat.item.left()}>
				<span className={styles.stat.item.dot()} />

				<span className={styles.stat.item.label()}>{label}</span>
			</div>

			<div className={styles.stat.item.right()}>
				<span className={styles.stat.item.counter(completed === total)}>
					{completed}/{total}
				</span>

				<button onClick={reset} className={styles.stat.item.button()}>
					{t("reset")}
				</button>
			</div>
		</li>
	);
}
