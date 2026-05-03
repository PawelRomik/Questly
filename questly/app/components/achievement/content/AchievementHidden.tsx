import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

export default function AchievementHidden() {
	const styles = achievementVariants["witcher3"];
	return <div className={styles.hidden()}>Hidden — click to reveal</div>;
}
