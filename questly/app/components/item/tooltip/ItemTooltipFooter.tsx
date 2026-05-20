import { itemVariants } from "@/app/components/item/variant/itemVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	price: number;
	game: string;
};

export function ItemTooltipFooter({ price, game }: Props) {
	const styles = useGameStyles(itemVariants);

	return (
		<div className={styles.tooltip.footer()}>
			<span>💰 {price}</span>
			<span>{game}</span>
		</div>
	);
}
