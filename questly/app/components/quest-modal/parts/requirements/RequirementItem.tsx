import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	item: {
		name: string;
	};

	amount: number;
};

export function RequirementItem({ item, amount }: Props) {
	const styles = questModalVariants["witcher3"];
	return (
		<div className={styles.requirements.tag.base()}>
			<span className={styles.requirements.secondary.base()}>{item.name}</span>

			<span className={styles.requirements.primary.base()}>x{amount}</span>
		</div>
	);
}
