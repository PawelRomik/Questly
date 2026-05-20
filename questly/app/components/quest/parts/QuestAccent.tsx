import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	completed: boolean;
	color: string;
};

export function QuestAccent({ completed, color }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<div className={styles.accent.base()}>
			<div style={{ backgroundColor: styles.accent.color(completed, color) }} className={styles.accent.bar()} />

			<div style={{ backgroundColor: styles.accent.color(completed, color) }} className={styles.accent.glow()} />
		</div>
	);
}
