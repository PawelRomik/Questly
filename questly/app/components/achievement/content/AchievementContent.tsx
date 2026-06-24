import AchievementDescription from "@/app/components/achievement/content/AchievementDescription";
import { AchievementTags } from "@/app/components/achievement/content/AchievementTags";
import AchievementTitle from "@/app/components/achievement/content/AchievementTitle";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { AchievementType } from "@/app/types/achievement";

type Props = {
	achievement: AchievementType;
	completed: boolean;
	revealed: boolean;
};

export function AchievementContent({ achievement, completed, revealed }: Props) {
	const { description, secret } = achievement;
	const styles = useGameStyles(achievementVariants);
	const { filters } = useFilters();

	return (
		<div className={styles.container()}>
			<AchievementTitle achievement={achievement} completed={completed} />
			<AchievementDescription description={description} revealed={revealed} secret={secret} />
			{!secret || (secret && revealed && <AchievementTags searchTags={filters.searchTags} completed={completed} achievement={achievement} />)}
		</div>
	);
}
