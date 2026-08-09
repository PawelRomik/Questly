import { getTheme } from "@/app/lib/utils/getTheme";
import { highlightText } from "@/app/lib/utils/highlightText";
import { AchievementWithMatches } from "@/app/types/achievement";

type AchievementTitleProps = {
	completed: boolean;
	achievement: AchievementWithMatches;
	game?: string;
};

export default function AchievementTitle({ completed, achievement, game }: AchievementTitleProps) {
	const theme = getTheme("achievement", game);
	return (
		<div className={theme.title.wrapper()}>
			<h2 className={theme.title.base(completed)}>{highlightText(achievement.title, achievement._titleMatch)}</h2>
		</div>
	);
}
