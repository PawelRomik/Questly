"use client";

import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { CollectionGroupButton } from "./CollectionGroupButton";

type Props = {
	groups: { title: string }[];
	onSelect: (title: string) => void;
	active: string | null;
};

export default function CollectionGroup({ groups, onSelect, active }: Props) {
	const styles = collectionVariants["witcher3"];
	return (
		<div className={styles.group.wrapper()}>
			{groups.map((g) => (
				<CollectionGroupButton key={g.title} title={g.title} active={active === g.title} onClick={() => onSelect(g.title)} />
			))}
		</div>
	);
}
