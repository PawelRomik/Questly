"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { GET_COLLECTION_GROUPS, GET_COLLECTIONS } from "@/app/lib/queries";
import { useEffect, useMemo } from "react";

import Collection from "@/app/components/collection/item/Collection";
import CollectionGroup from "@/app/components/collection/group/CollectionGroup";

import { CollectionType, GetCollectionGroupsData } from "@/app/types/collection";

import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useFilters } from "@/app/context/FiltersContext";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { useLocale } from "next-intl";
import { useFuzzySearch } from "@/app/hooks/useFuzzySearch";
import { useDebounce } from "@/app/lib/utils/useDebounce";
import { useCompleted } from "@/app/context/CompletedContext";
import { CompletedOption, MissableOption } from "@/app/components/filters/types";
import compareCollections from "@/app/lib/utils/compareCollections";

export default function CollectionList() {
	const params = useParams();
	const game = params.game as string;

	const locale = useLocale();

	const router = useRouter();
	const searchParams = useSearchParams();

	const selectedCollection = searchParams.get("collection");

	const { filters } = useFilters();

	const search = filters.search?.trim() ?? "";
	const debouncedSearch = useDebounce(search, 250);

	const isSearching = debouncedSearch.length > 0;
	const { isCollectionItemCompleted } = useCompleted(game, "collections");
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

	const collections = useLocalizedList<CollectionType, { game: string; locale: string }>({
		locale,
		query: GET_COLLECTIONS,
		vars: {
			game,
			locale
		},
		getItems: (data) => data?.collections ?? [],
		getId: (collection) => collection.uuid
	});

	const searchKeys = useMemo(() => ["title", ...(filters.searchItems ? ["items.name"] : [])], [filters.searchItems]);

	const searchedCollections = useFuzzySearch({
		items: collections,
		search: debouncedSearch,
		keys: searchKeys,
		getId: (c) => c.uuid
	});

	const displayedCollections = useMemo(() => {
		let list = isSearching ? searchedCollections : collections.filter((collection) => collection.collection_groups?.some((group) => group.uuid === selectedCollection));

		if (filters.dlc !== "all") {
			list = list.filter((collection) => collection.items.some((item) => item.dlc?.uuid === filters.dlc));
		}

		const completedMap = new Map(
			list.map((collection) => [collection.uuid, collection.items.length > 0 && collection.items.every((item) => isCollectionItemCompleted(collection.uuid, item.uuid))])
		);

		const missableMap = new Map(list.map((collection) => [collection.uuid, collection.items.some((item) => item.missable)]));

		if (filters.completed === CompletedOption.HIDE) {
			list = list.filter((collection) => !completedMap.get(collection.uuid));
		}

		if (filters.missables === MissableOption.SHOW_ONLY) {
			list = list.filter((collection) => missableMap.get(collection.uuid));
		}

		list = [...list].sort((a, b) => {
			if (filters.completed !== CompletedOption.DEFAULT) {
				const completedA = completedMap.get(a.uuid)!;
				const completedB = completedMap.get(b.uuid)!;

				if (completedA !== completedB) {
					if (filters.completed === CompletedOption.SHOW_FIRST) {
						return Number(completedB) - Number(completedA);
					}

					if (filters.completed === CompletedOption.SHOW_LAST) {
						return Number(completedA) - Number(completedB);
					}
				}
			}

			if (filters.missables === MissableOption.SHOW_FIRST) {
				const missableA = missableMap.get(a.uuid)!;
				const missableB = missableMap.get(b.uuid)!;

				if (missableA !== missableB) {
					return Number(missableB) - Number(missableA);
				}
			}

			return compareCollections(a, b, filters.sort);
		});

		return list;
	}, [isSearching, searchedCollections, collections, selectedCollection, filters.dlc, filters.completed, filters.missables, isCollectionItemCompleted, filters.sort]);

	const activeGroup = isSearching ? "search" : selectedCollection;

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
