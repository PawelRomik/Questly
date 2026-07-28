import AchievementDescription from "@/app/components/achievement/content/AchievementDescription";
import { AchievementTags } from "@/app/components/achievement/content/AchievementTags";
import AchievementTitle from "@/app/components/achievement/content/AchievementTitle";
import { useFilters } from "@/app/context/FiltersContext";
import { getTheme } from "@/app/lib/utils/getTheme";
import { AchievementType } from "@/app/types/achievement";

type Props = {
	achievement: AchievementType;
	completed: boolean;
	revealed: boolean;
	game?: string;
};

export function AchievementContent({ achievement, completed, revealed, game }: Props) {
	const { description, secret } = achievement;
	const { filters } = useFilters();
	const theme = getTheme("achievement", game);

	return (
		<div className={theme.container()}>
			<AchievementTitle game={game} achievement={achievement} completed={completed} />
			<AchievementDescription game={game} description={description} revealed={revealed} secret={secret} />
			{(!secret || revealed) && <AchievementTags game={game} searchTags={filters.searchTags} completed={completed} achievement={achievement} />}
		</div>
	);
}
