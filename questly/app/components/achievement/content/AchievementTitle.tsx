import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { highlightText } from "@/app/lib/utils/highlightText";

type AchievementTitleProps = {
	completed: boolean;
	title: string;
	search: string;
};

export default function AchievementTitle({ completed, title, search }: AchievementTitleProps) {
	const styles = useGameStyles(achievementVariants);
	return <h2 className={styles.title(completed)}>{highlightText(title, search)}</h2>;
}
