"use client";

import { Tooltip } from "radix-ui";
import { Item } from "@/app/types/quest";

import { ItemTrigger } from "./ItemTrigger";
import { ItemTooltipContent } from "./tooltip/ItemTooltipContent";

type Props = {
	item: Item;
	game?: string;
};

export function ItemDisplay({ item, game }: Props) {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<div>
					<ItemTrigger game={game} item={item} />
				</div>
			</Tooltip.Trigger>

			<ItemTooltipContent game={game} item={item} />
		</Tooltip.Root>
	);
}
