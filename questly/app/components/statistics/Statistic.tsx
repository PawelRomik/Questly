import { statisticVariants } from "@/app/components/statistics/variant/statisticVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	label: string;
};

export function Statistic({ label }: Props) {
	const styles = useGameStyles(statisticVariants);

	return (
		<li className={styles.stat.base()}>
			<div className={styles.stat.item.left()}>
				<span className={styles.stat.item.dot()} />

				<span className={styles.stat.item.label()}>{label}</span>
			</div>

			<div className={styles.stat.item.right()}>
				<span className={styles.stat.item.counter()}>0/13</span>

				<button className={styles.stat.item.button()}>Reset</button>
			</div>
		</li>
	);
}
