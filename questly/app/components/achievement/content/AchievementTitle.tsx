import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { highlightText } from "@/app/lib/utils/highlightText";
import { DLC } from "@/app/types/quest";

type AchievementTitleProps = {
	completed: boolean;
	title: string;
	search: string;
	missable?: boolean;
	dlc?: DLC;
};

export default function AchievementTitle({ completed, title, search, dlc, missable }: AchievementTitleProps) {
	const styles = useGameStyles(achievementVariants);
	const { missable_logo } = useGameAssets();
	return (
		<div className={styles.title.wrapper()}>
			<h2 className={styles.title.base(completed)}>{highlightText(title, search)}</h2>
			{dlc && <FixedImage src={dlc?.icon?.url} alt='dlc' className={styles.title.icon()} />}
			{missable && <FixedImage src={missable_logo} alt='dlc' className={styles.title.icon()} />}
		</div>
	);
}
