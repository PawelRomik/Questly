import { Item } from "@/app/types/quest";
import FixedImage from "@/app/components/common/FixedImage";
import { itemVariants } from "@/app/components/item/variant/itemVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

type Props = {
	item: Item;
};

export function ItemTooltipImage({ item }: Props) {
	const styles = useGameStyles(itemVariants);
	const { item_icon } = useGameAssets();

	return (
		<div className={styles.tooltip.image.wrapper()}>
			<FixedImage src={item?.image ?? item_icon} alt={item.name} className={styles.tooltip.image.image()} />
		</div>
	);
}
