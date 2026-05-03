import AchievementDescription from "@/app/components/achievement/content/AchievementDescription";
import AchievementTitle from "@/app/components/achievement/content/AchievementTitle";
import { AchievementContentContainerClass } from "@/app/components/achievement/variant/universal";
import CompletedTag from "@/app/components/common/CompletedTag";
import { AchievementType } from "@/app/types/achievement";

type Props = {
	achievement: AchievementType;
	completed: boolean;
	search: string;
};

export function AchievementContent({ achievement, completed, search }: Props) {
	const { title, description, secret } = achievement;

	return (
		<div className={AchievementContentContainerClass}>
			<AchievementTitle title={title} completed={completed} search={search} />
			<AchievementDescription description={description} secret={secret} />

			{completed && <CompletedTag />}
		</div>
	);
}
