import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

export default function AchievementImageOverlay() {
	const styles = useGameStyles(achievementVariants);
	return <div className={styles.image.overlay} />;
}
