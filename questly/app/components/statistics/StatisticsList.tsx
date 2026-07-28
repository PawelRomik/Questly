import { Statistic } from "@/app/components/statistics/Statistic";
import { useStatisticCounts } from "@/app/hooks/useStatisticCounts";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	game?: string;
};

export function StatisticList({ game }: Props) {
	const t = useTranslations();

	const stats = [
		{ id: "quests", label: t("quests.quests") },
		{ id: "achievements", label: t("achievements.achievements") },
		{ id: "collections", label: t("collections.collectibles") },
		{ id: "mapMarkers", label: t("map.mapMarkers") }
	];
	const theme = getTheme("statistic", game);
	const { counts } = useStatisticCounts();

	return (
		<ul className={theme.base()}>
			{stats.map((item) => (
				<Statistic
					game={game}
					key={item.id}
					type={item.id as "quests" | "achievements" | "collections" | "mapMarkers"}
					label={item.label}
					completed={counts[item.id as keyof typeof counts].completed}
					total={counts[item.id as keyof typeof counts].total}
				/>
			))}
		</ul>
	);
}
