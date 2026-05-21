import FixedImage from "@/app/components/common/FixedImage";
import { itemVariants } from "@/app/components/item/variant/itemVariants";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	price: number;
	game: string;
};

export function ItemTooltipFooter({ price, game }: Props) {
	const styles = useGameStyles(itemVariants);
	const { currency_icon } = useGameAssets();

	return (
		<div className={styles.tooltip.footer()}>
			<span className={styles.tooltip.rewards.base()}>
				<FixedImage src={currency_icon?.url || ""} alt={"currency"} className={styles.tooltip.rewards.icon()} /> {price}
			</span>
			<span>{game}</span>
		</div>
	);
}
