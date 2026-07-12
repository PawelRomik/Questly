import { Statistic } from "@/app/components/statistics/Statistic";
import { statisticVariants } from "@/app/components/statistics/variant/statisticVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useStatisticCounts } from "@/app/hooks/useStatisticCounts";

type Stat = {
	label: string;
	id: string;
};

type Props = {
	stats: Stat[];
};

export function StatisticList({ stats }: Props) {
	const styles = useGameStyles(statisticVariants);
	const { counts } = useStatisticCounts();

	return (
		<ul className={styles.base()}>
			{stats.map((item) => (
				<Statistic
					key={item.id}
					type={item.id as "quests" | "achievements" | "collections"}
					label={item.label}
					completed={counts[item.id as keyof typeof counts].completed}
					total={counts[item.id as keyof typeof counts].total}
				/>
			))}
		</ul>
	);
}
