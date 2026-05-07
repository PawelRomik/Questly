import { Tooltip } from "radix-ui";

import { Item } from "@/app/types/quest";

import { ItemDisplay } from "@/app/components/item/ItemDisplay";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	items?: Item[];
};

export function RewardItems({ items }: Props) {
	const styles = questModalVariants["witcher3"];
	if (!items?.length) return null;

	return (
		<Tooltip.Provider delayDuration={100}>
			<div className={styles.rewards.items()}>
				{items.map((item, i) => (
					<ItemDisplay key={i} item={item} />
				))}
			</div>
		</Tooltip.Provider>
	);
}
