import { tagVariants } from "@/app/components/tag/variant/tagVariants";

export default function CompletedTag() {
	const styles = tagVariants["witcher3"];
	return (
		<div className={styles.completed.wrapper()}>
			<span className={styles.completed.tag()}>✔ Completed</span>
		</div>
	);
}
