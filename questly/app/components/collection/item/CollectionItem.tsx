import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import FixedImage from "@/app/components/common/FixedImage";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

type Props = {
	name: string;
	src: string;
	completed: boolean;
	onClick: () => void;
	missable: boolean;
};

export function CollectionItem({ name, src, completed, onClick, missable }: Props) {
	const styles = useGameStyles(collectionVariants);
	const { missable_icon } = useGameAssets();

	return (
		<div onClick={onClick} className={styles.collection.item.base(completed)}>
			<div className={styles.collection.item.wrapper()}>
				<FixedImage src={src} alt={name} className={styles.collection.item.image()} />
				{missable && <FixedImage src={missable_icon} alt='missable' className={styles.collection.item.missableIcon()} />}
			</div>
		</div>
	);
}
