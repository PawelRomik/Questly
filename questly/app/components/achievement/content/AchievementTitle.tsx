import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { highlightText } from "@/app/lib/utils/highlightText";
import { AchievementWithMatches } from "@/app/types/achievement";

type AchievementTitleProps = {
	completed: boolean;
	achievement: AchievementWithMatches;
	game?: string;
};

export default function AchievementTitle({ completed, achievement, game }: AchievementTitleProps) {
	const { missable_logo } = useGameAssets();
	const { dlc } = achievement;
	const theme = getTheme("achievement", game);
	return (
		<div className={theme.title.wrapper()}>
			<h2 className={theme.title.base(completed)}>{highlightText(achievement.title, achievement._titleMatch)}</h2>
			{dlc && <FixedImage src={dlc?.icon} alt='dlc' className={theme.title.icon()} />}
			{achievement.missable && <FixedImage src={missable_logo} alt='dlc' className={theme.title.icon()} />}
		</div>
	);
}
