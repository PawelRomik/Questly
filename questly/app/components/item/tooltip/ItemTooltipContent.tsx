import { Tooltip } from "radix-ui";
import { Item } from "@/app/types/quest";

import { ItemTooltipImage } from "./ItemTooltipImage";
import { ItemTooltipHeader } from "./ItemTooltipHeader";
import { ItemTooltipDescription } from "./ItemTooltipDescription";
import { ItemTooltipFooter } from "./ItemTooltipFooter";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	item: Item;
	game?: string;
};

export function ItemTooltipContent({ item, game }: Props) {
	const theme = getTheme("item", game);
	return (
		<Tooltip.Portal>
			<Tooltip.Content side='top' className={theme.tooltip.base()}>
				<ItemTooltipImage game={game} item={item} />
				<ItemTooltipHeader game={game} item={item} />
				<ItemTooltipDescription game={game} description={item.description} />
				<ItemTooltipFooter game={game} price={item.price} />

				<Tooltip.Arrow className={theme.tooltip.arrow()} />
			</Tooltip.Content>
		</Tooltip.Portal>
	);
}
