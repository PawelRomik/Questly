import { Item } from "@/app/types/quest";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	item: Item;
	game?: string;
};

export function ItemTrigger({ item, game }: Props) {
	const { item_icon } = useGameAssets();
	const theme = getTheme("item", game);

	return (
		<div className={theme.trigger.base()}>
			<span style={{ color: item.rarity.color }}>
				<FixedImage src={item_icon} className={theme.trigger.icon()} alt={item.name} />
			</span>

			<span style={{ color: item.rarity.color }}>
				{item.name}
				{item.amount > 1 && <span className={theme.trigger.amount()}>x{item.amount}</span>}
			</span>
		</div>
	);
}
