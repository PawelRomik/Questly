import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { highlightText } from "@/app/lib/utils/highlightText";
import { AchievementWithMatches } from "@/app/types/achievement";
import { DLC } from "@/app/types/quest";

type AchievementTitleProps = {
	completed: boolean;
	achievement: AchievementWithMatches;
	dlc?: DLC;
};

export default function AchievementTitle({ completed, dlc, achievement }: AchievementTitleProps) {
	const styles = useGameStyles(achievementVariants);
	const { missable_logo } = useGameAssets();
	return (
		<div className={styles.title.wrapper()}>
			<h2 className={styles.title.base(completed)}>{highlightText(achievement.title, achievement._titleMatch)}</h2>
			{dlc && <FixedImage src={dlc?.icon?.url} alt='dlc' className={styles.title.icon()} />}
			{achievement.missable && <FixedImage src={missable_logo} alt='dlc' className={styles.title.icon()} />}
		</div>
	);
}
