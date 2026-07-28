import { getTheme } from "@/app/lib/utils/getTheme";
import { Item } from "@/app/types/quest";

type Props = {
	item: Item;
	game?: string;
};

export function ItemTooltipHeader({ item, game }: Props) {
	const theme = getTheme("item", game);
	return (
		<>
			<div
				className={theme.tooltip.header.name()}
				style={{
					color: item.rarity.color,
					textShadow: `0 0 8px ${item.rarity.color}66`
				}}
			>
				{item.name}
			</div>

			<div className={theme.tooltip.header.rarity()} style={{ color: item.rarity.color }}>
				{item.rarity.name}
			</div>

			<div className={theme.tooltip.header.type()}>{item.item_type.name}</div>
		</>
	);
}
