import { Item } from "@/app/types/quest";
import FixedImage from "@/app/components/common/FixedImage";
import { itemVariants } from "@/app/components/item/variant/itemVariants";

type Props = {
	item: Item;
};

export function ItemTooltipImage({ item }: Props) {
	const styles = itemVariants["witcher3"];

	return (
		<div className={styles.tooltip.image.wrapper()}>
			<FixedImage src={item.image.url} alt={item.name} className={styles.tooltip.image.image()} />
		</div>
	);
}
