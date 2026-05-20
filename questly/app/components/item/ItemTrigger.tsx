import { Item } from "@/app/types/quest";
import { itemVariants } from "@/app/components/item/variant/itemVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";

type Props = {
	item: Item;
};

export function ItemTrigger({ item }: Props) {
	const styles = useGameStyles(itemVariants);
	const { item_icon } = useGameAssets();

	return (
		<div className={styles.trigger.base()}>
			<span style={{ color: item.rarity.color }}>
				<FixedImage src={item_icon?.url || ""} className={styles.trigger.icon()} alt={item.name} />
			</span>

			<span style={{ color: item.rarity.color }}>
				{item.name}
				{item.amount > 1 && <span className={styles.trigger.amount()}>x{item.amount}</span>}
			</span>
		</div>
	);
}
