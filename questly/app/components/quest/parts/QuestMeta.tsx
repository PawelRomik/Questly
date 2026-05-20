import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	level: number;
	children: React.ReactNode;
};

export function QuestMeta({ level, children }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<div className={styles.meta.base()}>
			{children}

			<div className={styles.meta.level()}>
				<span className={styles.meta.label()}>Lvl</span>

				<p className={styles.meta.value()}>{level}</p>
			</div>
		</div>
	);
}
