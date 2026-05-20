import { tagVariants } from "@/app/components/tag/variant/tagVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

export default function CompletedTag() {
	const styles = useGameStyles(tagVariants);
	return (
		<div className={styles.completed.wrapper()}>
			<span className={styles.completed.tag()}>✔ Completed</span>
		</div>
	);
}
