import Image from "next/image";
import itemIcon from "../../../public/assets/item.webp";
import { Item } from "@/app/types/quest";
import { itemVariants } from "@/app/components/item/variant/itemVariants";

type Props = {
	item: Item;
};

export function ItemTrigger({ item }: Props) {
	const styles = itemVariants["witcher3"];

	return (
		<div className={styles.trigger.base()}>
			<span style={{ color: item.rarity.color }}>
				<Image src={itemIcon} className={styles.trigger.icon()} unoptimized alt={item.name} />
			</span>

			<span style={{ color: item.rarity.color }}>
				{item.name}
				{item.amount > 1 && <span className={styles.trigger.amount()}>x{item.amount}</span>}
			</span>
		</div>
	);
}
