import { Statistic } from "@/app/components/statistics/Statistic";
import { statisticVariants } from "@/app/components/statistics/variant/statisticVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Stat = {
	label: string;
};

type Props = {
	stats: Stat[];
};

export function StatisticList({ stats }: Props) {
	const styles = useGameStyles(statisticVariants);
	return (
		<ul className={styles.base()}>
			{stats.map((item) => (
				<Statistic key={item.label} label={item.label} />
			))}
		</ul>
	);
}
