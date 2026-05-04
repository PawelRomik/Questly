import { CollectionAccent } from "@/app/components/collection/common/CollectionAccent";
import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";

type Props = {
	title: string;
	active: boolean;
	onClick: () => void;
};

export function CollectionGroupButton({ title, active, onClick }: Props) {
	const styles = collectionVariants["witcher3"];

	return (
		<button onClick={onClick} className={styles.group.button(active)}>
			<CollectionAccent completed={active} />
			<span>{title}</span>
		</button>
	);
}
