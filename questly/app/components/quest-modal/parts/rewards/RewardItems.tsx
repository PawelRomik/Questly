import { Tooltip } from "radix-ui";

import { Item } from "@/app/types/quest";

import { ItemDisplay } from "@/app/components/item/ItemDisplay";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	items?: Item[];
	game?: string;
};

export function RewardItems({ items, game }: Props) {
	const theme = getTheme("questModal", game);
	if (!items?.length) return null;

	return (
		<Tooltip.Provider delayDuration={100}>
			<div className={theme.rewards.items()}>
				{items.map((item, i) => (
					<ItemDisplay game={game} key={i} item={item} />
				))}
			</div>
		</Tooltip.Provider>
	);
}
