import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";

type Props = {
	completed: boolean;
	onCompleteAll: () => void;
	onReset: () => void;
};

export function CollectionButton({ completed, onCompleteAll, onReset }: Props) {
	const styles = collectionVariants["witcher3"];
	const buttonText = completed ? "RESET" : "COMPLETE";
	const onClick = completed ? onReset : onCompleteAll;

	return (
		<button onClick={onClick} className={styles.collection.button(completed)}>
			{buttonText}
		</button>
	);
}
