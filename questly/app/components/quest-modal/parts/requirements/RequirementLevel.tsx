import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	level: number;
};

export function RequirementLevel({ level }: Props) {
	const styles = useGameStyles(questModalVariants);
	return (
		<div className={styles.requirements.tag.base()}>
			<span className={styles.requirements.tag.primary()}>Level</span>

			<span className={styles.requirements.tag.secondary()}>{level}</span>
		</div>
	);
}
