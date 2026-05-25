"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { GET_COLLECTION_GROUPS, GET_COLLECTIONS, SEARCH_COLLECTIONS } from "@/app/lib/queries";
import { useEffect, useMemo } from "react";

import Collection from "@/app/components/collection/item/Collection";
import CollectionGroup from "@/app/components/collection/group/CollectionGroup";

type SearchCollectionsData = {
	collections: CollectionType[];
};

import { CollectionType, GetCollectionGroupsData, GetCollectionsData, GetCollectionsVars } from "@/app/types/collection";

import { useApollo } from "@/app/hooks/useApollo";
import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useFilters } from "@/app/context/FiltersContext";

export default function CollectionList() {
	const params = useParams();
	const game = params.game as string;

	const router = useRouter();
	const searchParams = useSearchParams();

	const selectedCollection = searchParams.get("collection");

	const { filters } = useFilters();

	const search = filters.search?.trim() ?? "";
	const isSearching = search.length > 0;

	const styles = useGameStyles(collectionVariants);

	const { data: groupsData } = useApollo<GetCollectionGroupsData, { game: string }>(GET_COLLECTION_GROUPS, { game });

	useEffect(() => {
		if (isSearching) return;

		if (!selectedCollection && groupsData?.collectionGroups?.length) {
			const first = groupsData.collectionGroups[0].title;

			const params = new URLSearchParams(searchParams.toString());

			params.set("collection", first);

			router.replace(`?${params.toString()}`);
		}
	}, [selectedCollection, groupsData, router, searchParams, isSearching]);

	const { data: collectionsData } = useApollo<GetCollectionsData, GetCollectionsVars>(GET_COLLECTIONS, {
		collectionGroup: selectedCollection as string
	});

	const { data: searchData } = useApollo<SearchCollectionsData, { search: string; game: string }>(SEARCH_COLLECTIONS, {
		search,
		game
	});

	const collections = useMemo(() => {
		if (isSearching) {
			return searchData?.collections ?? [];
		}

		return collectionsData?.collectionGroups?.[0]?.collections ?? [];
	}, [isSearching, searchData, collectionsData]);

	const activeGroup = isSearching ? "Search Results" : selectedCollection;

	const handleSelectGroup = (title: string) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("collection", title);

		router.push(`?${params.toString()}`);
	};

	return (
		<div className={styles.list.base()}>
			<div className={styles.list.group()}>
				<CollectionGroup groups={groupsData?.collectionGroups ?? []} onSelect={handleSelectGroup} active={activeGroup} />
			</div>

			<div className={styles.list.grid()}>
				{collections.map((c: CollectionType) => (
					<Collection key={c.uuid} collection={c} />
				))}
			</div>
		</div>
	);
}
