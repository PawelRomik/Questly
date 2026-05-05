import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import FixedImage from "@/app/components/common/FixedImage";

type Props = {
	name: string;
	src: string;
	completed: boolean;
	onClick: () => void;
};

export function CollectionItem({ name, src, completed, onClick }: Props) {
	const styles = collectionVariants["witcher3"];

	return (
		<div onClick={onClick} className={styles.collection.item.base(completed)}>
			<FixedImage src={src} alt={name} className={styles.collection.item.image()} />
		</div>
	);
}
