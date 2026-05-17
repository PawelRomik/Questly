import { questVariants } from "@/app/components/quest/variant/questVariants";

type Props = {
	level: number;
	children: React.ReactNode;
};

export function QuestMeta({ level, children }: Props) {
	const styles = questVariants["witcher3"];
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
