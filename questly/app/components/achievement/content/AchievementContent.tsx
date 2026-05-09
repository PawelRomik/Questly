import AchievementDescription from "@/app/components/achievement/content/AchievementDescription";
import AchievementTitle from "@/app/components/achievement/content/AchievementTitle";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { AchievementType } from "@/app/types/achievement";

type Props = {
	achievement: AchievementType;
	completed: boolean;
	search: string;
};

export function AchievementContent({ achievement, completed, search }: Props) {
	const { title, description, secret } = achievement;
	const styles = achievementVariants["witcher3"];

	return (
		<div className={styles.container()}>
			<AchievementTitle title={title} completed={completed} search={search} />
			<AchievementDescription description={description} secret={secret} />

			{completed && <CompletedTag />}
		</div>
	);
}
