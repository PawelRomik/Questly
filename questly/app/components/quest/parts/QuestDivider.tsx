import { questVariants } from "@/app/components/quest/variant/questVariants";

export function QuestDivider() {
	const styles = questVariants["witcher3"];
	return <div className={styles.divider()} />;
}
