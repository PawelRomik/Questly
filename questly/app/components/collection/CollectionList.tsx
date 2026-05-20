"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { GET_COLLECTION_GROUPS, GET_COLLECTIONS } from "@/app/lib/queries";
import { useEffect, useMemo } from "react";
import Collection from "@/app/components/collection/item/Collection";
import CollectionGroup from "@/app/components/collection/group/CollectionGroup";
import { CollectionType, GetCollectionGroupsData, GetCollectionsData, GetCollectionsVars } from "@/app/types/collection";
import { useApollo } from "@/app/hooks/useApollo";
import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

export default function CollectionList() {
	const params = useParams();
	const game = params.game as string;
	const router = useRouter();
	const searchParams = useSearchParams();
	const selectedCollection = searchParams.get("collection");
	const { data: groupsData } = useApollo<GetCollectionGroupsData, { game: string }>(GET_COLLECTION_GROUPS, { game });

	useEffect(() => {
		if (!selectedCollection && groupsData?.collectionGroups?.length) {
			const first = groupsData.collectionGroups[0].title;

			const params = new URLSearchParams(searchParams.toString());
			params.set("collection", first);

			router.replace(`?${params.toString()}`);
		}
	}, [selectedCollection, groupsData, router, searchParams]);

	const { data: collectionsData } = useApollo<GetCollectionsData, GetCollectionsVars>(GET_COLLECTIONS, { collectionGroup: selectedCollection as string });
	const collections = useMemo(() => collectionsData?.collectionGroups?.[0]?.collections ?? [], [collectionsData]);
	const styles = useGameStyles(collectionVariants);

	const handleSelectGroup = (title: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("collection", title);
		router.push(`?${params.toString()}`);
	};

	return (
		<div className={styles.list.base()}>
			<div className={styles.list.group()}>
				<CollectionGroup groups={groupsData?.collectionGroups ?? []} onSelect={handleSelectGroup} active={selectedCollection} />
			</div>

			<div className={styles.list.grid()}>
				{collections.map((c: CollectionType, i: number) => (
					<Collection key={i} collection={c} />
				))}
			</div>
		</div>
	);
}
