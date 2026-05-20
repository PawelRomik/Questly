import { itemVariants } from "@/app/components/item/variant/itemVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { Item } from "@/app/types/quest";

type Props = {
	item: Item;
};

export function ItemTooltipHeader({ item }: Props) {
	const styles = useGameStyles(itemVariants);

	return (
		<>
			<div
				className={styles.tooltip.header.name()}
				style={{
					color: item.rarity.color,
					textShadow: `0 0 8px ${item.rarity.color}66`
				}}
			>
				{item.name}
			</div>

			<div className={styles.tooltip.header.rarity()} style={{ color: item.rarity.color }}>
				{item.rarity.name}
			</div>

			<div className={styles.tooltip.header.type()}>{item.item_type.name}</div>
		</>
	);
}
