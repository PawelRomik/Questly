import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	completed: boolean;
	onCompleteAll: () => void;
	onReset: () => void;
};

export function CollectionButton({ completed, onCompleteAll, onReset }: Props) {
	const styles = useGameStyles(collectionVariants);
	const buttonText = completed ? "RESET" : "COMPLETE";
	const onClick = completed ? onReset : onCompleteAll;

	return (
		<button onClick={onClick} className={styles.collection.button(completed)}>
			{buttonText}
		</button>
	);
}
