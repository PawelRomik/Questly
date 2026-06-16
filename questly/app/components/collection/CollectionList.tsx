"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { GET_COLLECTION_GROUPS, GET_COLLECTIONS, SEARCH_COLLECTIONS } from "@/app/lib/queries";
import { useEffect, useMemo } from "react";

import Collection from "@/app/components/collection/item/Collection";
import CollectionGroup from "@/app/components/collection/group/CollectionGroup";

import { CollectionType, GetCollectionGroupsData, GetCollectionsVars } from "@/app/types/collection";

import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useFilters } from "@/app/context/FiltersContext";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { useLocale } from "next-intl";

export default function CollectionList() {
	const params = useParams();
	const game = params.game as string;

	const locale = useLocale();

	const router = useRouter();
	const searchParams = useSearchParams();

	const selectedCollection = searchParams.get("collection");

	const { filters } = useFilters();

	const search = filters.search?.trim() ?? "";
	const isSearching = search.length > 0;

	const styles = useGameStyles(collectionVariants);

	const collectionGroups = useLocalizedList({
		locale,
		query: GET_COLLECTION_GROUPS,
		vars: { game },
		getItems: (data: GetCollectionGroupsData) => data?.collectionGroups ?? [],
		getId: (group) => group.uuid
	});

	useEffect(() => {
		if (isSearching) return;

		if (!selectedCollection && collectionGroups.length) {
			const first = collectionGroups[0].uuid;

			const params = new URLSearchParams(searchParams.toString());

			params.set("collection", first);

			router.replace(`?${params.toString()}`);
		}
	}, [selectedCollection, collectionGroups, router, searchParams, isSearching]);

	const collections = useLocalizedList<CollectionType, GetCollectionsVars>({
		locale,
		query: GET_COLLECTIONS,
		vars: {
			collectionGroup: selectedCollection as string
		},
		getItems: (data) => data?.collectionGroups?.[0]?.collections ?? [],
		getId: (collection) => collection.uuid
	});

	const searchCollections = useLocalizedList<CollectionType, { search: string; game: string }>({
		locale,
		query: SEARCH_COLLECTIONS,
		vars: {
			search,
			game
		},
		getItems: (data) => data?.collections ?? [],
		getId: (collection) => collection.uuid
	});

	const displayedCollections = useMemo(() => {
		if (isSearching) {
			return searchCollections;
		}

		return collections;
	}, [isSearching, searchCollections, collections]);

	const activeGroup = isSearching ? "Search Results" : selectedCollection;

	const handleSelectGroup = (uuid: string) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("collection", uuid);

		router.push(`?${params.toString()}`);
	};

	return (
		<div className={styles.list.base()}>
			<div className={styles.list.group()}>
				<CollectionGroup groups={collectionGroups} onSelect={handleSelectGroup} active={activeGroup} />
			</div>

			<div className={styles.list.grid()}>
				{displayedCollections.map((collection) => (
					<Collection key={collection.uuid} collection={collection} />
				))}
			</div>
		</div>
	);
}
