import { Statistic } from "@/app/components/statistics/Statistic";
import { statisticVariants } from "@/app/components/statistics/variant/statisticVariants";

type Stat = {
	label: string;
};

type Props = {
	stats: Stat[];
};

export function StatisticList({ stats }: Props) {
	const styles = statisticVariants["witcher3"];
	return (
		<ul className={styles.base()}>
			{stats.map((item) => (
				<Statistic key={item.label} label={item.label} />
			))}
		</ul>
	);
}
