"use client";

import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { CollectionGroupButton } from "./CollectionGroupButton";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	groups: { uuid: string; title: string }[];
	onSelect: (title: string) => void;
	active: string | null;
};

export default function CollectionGroup({ groups, onSelect, active }: Props) {
	const styles = useGameStyles(collectionVariants);

	const isSearching = active === "Search Results";

	return (
		<div className={styles.group.wrapper()}>
			{isSearching && <CollectionGroupButton title='Search Results' active />}

			{groups.map((g) => (
				<CollectionGroupButton key={g.title} title={g.title} active={active === g.uuid} disabled={isSearching} onClick={() => !isSearching && onSelect(g.uuid)} />
			))}
		</div>
	);
}
