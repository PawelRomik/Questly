import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	completed: boolean;
};

export function CollectionAccent({ completed }: Props) {
	const styles = useGameStyles(collectionVariants);

	return (
		<div className={styles.accent.wrapper()}>
			<div className={styles.accent.bar(completed)} />
			<div className={styles.accent.glow(completed)} />
		</div>
	);
}
