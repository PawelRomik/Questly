import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

export default function AchievementImageOverlay() {
	const styles = achievementVariants["witcher3"];
	return <div className={styles.image.overlay} />;
}
