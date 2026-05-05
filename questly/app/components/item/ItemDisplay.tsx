"use client";

import { Tooltip } from "radix-ui";
import { Item } from "@/app/types/quest";

import { ItemTrigger } from "./ItemTrigger";
import { ItemTooltipContent } from "./tooltip/ItemTooltipContent";

type Props = {
	item: Item;
};

export function ItemDisplay({ item }: Props) {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<div>
					<ItemTrigger item={item} />
				</div>
			</Tooltip.Trigger>

			<ItemTooltipContent item={item} />
		</Tooltip.Root>
	);
}
