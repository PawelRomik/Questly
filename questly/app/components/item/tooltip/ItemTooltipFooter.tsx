import { itemVariants } from "@/app/components/item/variant/itemVariants";

type Props = {
	price: number;
	game: string;
};

export function ItemTooltipFooter({ price, game }: Props) {
	const styles = itemVariants["witcher3"];

	return (
		<div className={styles.tooltip.footer()}>
			<span>💰 {price}</span>
			<span>{game}</span>
		</div>
	);
}
