import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

export default function AchievementHidden() {
	const styles = useGameStyles(achievementVariants);
	return <div className={styles.hidden()}>Hidden — click to reveal</div>;
}
