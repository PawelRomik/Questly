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

type Props = {
	collection: CollectionType;
};

export default function Collection({ collection }: Props) {
	const { title, items, uuid } = collection;
	const { game } = useParams() as { game: string };
	const styles = collectionVariants["witcher3"];
	const { toggleCollectionItem, isCollectionItemCompleted } = useCompleted(game, "collections");

	const completedMap = useMemo(() => {
		const map = new Map<string, boolean>();
		items.forEach((item) => map.set(item.uuid, isCollectionItemCompleted(uuid, item.uuid)));
		return map;
	}, [items, uuid, isCollectionItemCompleted]);

	const completedCount = useMemo(() => Array.from(completedMap.values()).filter(Boolean).length, [completedMap]);

	const total = items.length;
	const isComplete = completedCount === total;

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

	return (
		<div className={styles.collection.base(isComplete)}>
			<CollectionAccent completed={isComplete} />

			<CollectionHeader title={title} completed={completedCount} total={total} />

			<div className={styles.collection.grid()}>
				{items.map((item) => (
					<CollectionItem key={item.uuid} name={item.name} src={item.image.url} completed={!!completedMap.get(item.uuid)} onClick={() => handleItemClick(item.uuid)} />
				))}
			</div>

			<CollectionButton completed={isComplete} onCompleteAll={handleCompleteAll} onReset={handleReset} />
		</div>
	);
}
