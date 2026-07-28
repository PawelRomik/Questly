import { Item } from "@/app/types/quest";
import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	item: Item;
	game?: string;
};

export function ItemTooltipImage({ item, game }: Props) {
	const { item_icon } = useGameAssets();
	const theme = getTheme("item", game);

	return (
		<div className={theme.tooltip.image.wrapper()}>
			<FixedImage src={item?.image ?? item_icon} alt={item.name} className={theme.tooltip.image.image()} />
		</div>
	);
}
