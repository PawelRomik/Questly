"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { CollectionType } from "@/app/types/collection";
import { CollectionAccent } from "../common/CollectionAccent";
import { CollectionHeader } from "./CollectionHeader";
import { CollectionItem } from "./CollectionItem";
import { CollectionButton } from "./CollectionButton";
import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useCompleted } from "@/app/context/CompletedContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

type Props = {
	collection: CollectionType;
};

export default function Collection({ collection }: Props) {
	console.log(collection.uuid);
	const { title, items, uuid } = collection;
	const { game } = useParams() as { game: string };
	const styles = useGameStyles(collectionVariants);
	const { toggleCollectionItem, isCollectionItemCompleted } = useCompleted(game, "collections");

	const completedMap = useMemo(() => {
		const map = new Map<string, boolean>();
		items.forEach((item) => map.set(item.uuid, isCollectionItemCompleted(uuid, item.uuid)));
		return map;
	}, [items, uuid, isCollectionItemCompleted]);

	const completedCount = useMemo(() => Array.from(completedMap.values()).filter(Boolean).length, [completedMap]);

	const total = items.length;
	const isComplete = completedCount === total;
	const { item_icon } = useGameAssets();

	const handleItemClick = (itemUuid: string) => {
		toggleCollectionItem(uuid, itemUuid);
	};

	const handleCompleteAll = () => {
		items.forEach((item) => {
			if (!completedMap.get(item.uuid)) {
				toggleCollectionItem(uuid, item.uuid);
			}
		});
	};

	const handleReset = () => {
		items.forEach((item) => {
			if (completedMap.get(item.uuid)) {
				toggleCollectionItem(uuid, item.uuid);
			}
		});
	};

	const dlcs = useMemo(() => Array.from(new Map(items.filter((item) => item.dlc).map((item) => [item.dlc!.title, item.dlc!])).values()), [items]);
	const hasMissable = useMemo(() => items.some((item) => item.missable), [items]);

	return (
		<div className={styles.collection.base(isComplete)}>
			<CollectionAccent completed={isComplete} />

			<CollectionHeader dlcs={dlcs} title={title} hasMissable={hasMissable} completed={completedCount} total={total} />

			<div className={styles.collection.grid()}>
				{items.map((item) => (
					<CollectionItem
						key={item.uuid}
						name={item.name}
						missable={item.missable}
						src={item?.image?.url ?? item_icon}
						completed={!!completedMap.get(item.uuid)}
						onClick={() => handleItemClick(item.uuid)}
					/>
				))}
			</div>

			<CollectionButton completed={isComplete} onCompleteAll={handleCompleteAll} onReset={handleReset} />
		</div>
	);
}
