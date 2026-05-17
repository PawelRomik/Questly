import { questVariants } from "@/app/components/quest/variant/questVariants";

type Props = {
	completed: boolean;
	color: string;
};

export function QuestAccent({ completed, color }: Props) {
	const styles = questVariants["witcher3"];

	return (
		<div className={styles.accent.base()}>
			<div style={{ backgroundColor: styles.accent.color(completed, color) }} className={styles.accent.bar()} />

			<div style={{ backgroundColor: styles.accent.color(completed, color) }} className={styles.accent.glow()} />
		</div>
	);
}
