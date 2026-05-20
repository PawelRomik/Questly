import { Tooltip } from "radix-ui";
import { Item } from "@/app/types/quest";

import { ItemTooltipImage } from "./ItemTooltipImage";
import { ItemTooltipHeader } from "./ItemTooltipHeader";
import { ItemTooltipDescription } from "./ItemTooltipDescription";
import { ItemTooltipFooter } from "./ItemTooltipFooter";
import { itemVariants } from "@/app/components/item/variant/itemVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	item: Item;
};

export function ItemTooltipContent({ item }: Props) {
	const styles = useGameStyles(itemVariants);
	return (
		<Tooltip.Portal>
			<Tooltip.Content side='top' className={styles.tooltip.base()}>
				<ItemTooltipImage item={item} />
				<ItemTooltipHeader item={item} />
				<ItemTooltipDescription description={item.description} />
				<ItemTooltipFooter price={item.price} game={item.game} />

				<Tooltip.Arrow className={styles.tooltip.arrow()} />
			</Tooltip.Content>
		</Tooltip.Portal>
	);
}
