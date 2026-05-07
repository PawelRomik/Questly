import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	level: number;
};

export function RequirementLevel({ level }: Props) {
	const styles = questModalVariants["witcher3"];
	return (
		<div className={styles.requirements.tag.base()}>
			<span className={styles.requirements.tag.primary()}>Level</span>

			<span className={styles.requirements.tag.secondary()}>{level}</span>
		</div>
	);
}
