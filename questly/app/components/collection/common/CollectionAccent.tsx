import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";

type Props = {
	completed: boolean;
};

export function CollectionAccent({ completed }: Props) {
	const styles = collectionVariants["witcher3"];

	return (
		<div className={styles.accent.wrapper()}>
			<div className={styles.accent.bar(completed)} />
			<div className={styles.accent.glow(completed)} />
		</div>
	);
}
