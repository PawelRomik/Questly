"use client";

import { useMemo } from "react";
import { CollectionType } from "@/app/types/collection";
import { CollectionAccent } from "../common/CollectionAccent";
import { CollectionHeader } from "./CollectionHeader";
import { CollectionItem } from "./CollectionItem";
import { CollectionButton } from "./CollectionButton";
import { useCompleted } from "@/app/context/CompletedContext";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { motion } from "framer-motion";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	collection: CollectionType;
	game: string;
};

export default function Collection({ collection, game }: Props) {
	const { items } = collection;
	const theme = getTheme("collection", game);

	const { toggleCollectionItem, isCollectionItemCompleted } = useCompleted(game, "collections");

	const completedMap = useMemo(() => {
		const map = new Map<string, boolean>();
		items.forEach((item) => map.set(item.uuid, isCollectionItemCompleted(item.uuid)));
		return map;
	}, [items, isCollectionItemCompleted]);

	const completedCount = useMemo(() => Array.from(completedMap.values()).filter(Boolean).length, [completedMap]);

	const total = items.length;
	const isComplete = completedCount === total;
	const { item_icon } = useGameAssets();

	const handleItemClick = (itemUuid: string) => {
		toggleCollectionItem(itemUuid);
	};

	const handleCompleteAll = () => {
		items.forEach((item) => {
			if (!completedMap.get(item.uuid)) {
				toggleCollectionItem(item.uuid);
			}
		});
	};

	const handleReset = () => {
		items.forEach((item) => {
			if (completedMap.get(item.uuid)) {
				toggleCollectionItem(item.uuid);
			}
		});
	};

	const dlcs = useMemo(() => Array.from(new Map(items.filter((item) => item.dlc).map((item) => [item.dlc!.title, item.dlc!])).values()), [items]);
	const hasMissable = useMemo(() => items.some((item) => item.missable), [items]);

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: -5 },
				visible: { opacity: 1, y: 0 }
			}}
			transition={{ type: "spring", stiffness: 300, damping: 25 }}
			whileTap={{ scale: 0.97 }}
			layout
		>
			<div className={theme.collection.base(isComplete)}>
				<CollectionAccent game={game} completed={isComplete} />

				<CollectionHeader game={game} dlcs={dlcs} collection={collection} hasMissable={hasMissable} completed={completedCount} total={total} />

				<div className={theme.collection.grid()}>
					{items.map((item) => (
						<CollectionItem
							game={game}
							key={item.uuid}
							name={item.name}
							missable={item.missable}
							src={item?.image ?? item_icon}
							completed={!!completedMap.get(item.uuid)}
							onClick={() => handleItemClick(item.uuid)}
						/>
					))}
				</div>

				<CollectionButton game={game} completed={isComplete} onCompleteAll={handleCompleteAll} onReset={handleReset} />
			</div>
		</motion.div>
	);
}
