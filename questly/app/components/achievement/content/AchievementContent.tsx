import AchievementDescription from "@/app/components/achievement/content/AchievementDescription";
import AchievementTitle from "@/app/components/achievement/content/AchievementTitle";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { AchievementType } from "@/app/types/achievement";

type Props = {
	achievement: AchievementType;
	completed: boolean;
	search: string;
	revealed: boolean;
};

export function AchievementContent({ achievement, completed, revealed, search }: Props) {
	const { title, description, secret, dlc, missable } = achievement;
	const styles = useGameStyles(achievementVariants);

	return (
		<div className={styles.container()}>
			<AchievementTitle missable={missable} dlc={dlc} title={title} completed={completed} search={search} />
			<AchievementDescription description={description} revealed={revealed} secret={secret} />

			{completed && <CompletedTag />}
		</div>
	);
}
