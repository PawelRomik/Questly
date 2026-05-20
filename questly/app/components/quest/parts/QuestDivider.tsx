import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

export function QuestDivider() {
	const styles = useGameStyles(questVariants);
	return <div className={styles.divider()} />;
}
