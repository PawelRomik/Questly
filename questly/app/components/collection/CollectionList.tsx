"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { GET_COLLECTION_GROUPS, GET_COLLECTIONS } from "@/app/lib/queries";

import { useMemo } from "react";
import Collection from "@/app/components/collection/Collection";
import CollectionGroup from "@/app/components/collection/CollectionGroup";
import { CollectionType, GetCollectionGroupsData, GetCollectionsData, GetCollectionsVars } from "@/app/types/collection";
import { useApollo } from "@/app/hooks/useApollo";

export default function CollectionList() {
	const params = useParams();
	const game = params.game as string;

	const router = useRouter();
	const searchParams = useSearchParams();

	const selectedCollection = searchParams.get("collection");

	const { data: groupsData } = useApollo<GetCollectionGroupsData, { game: string }>(GET_COLLECTION_GROUPS, { game });

	const { data: collectionsData } = useApollo<GetCollectionsData, GetCollectionsVars>(GET_COLLECTIONS, { collectionGroup: selectedCollection as string });

	const collections = useMemo(() => collectionsData?.collectionGroups?.[0]?.collections ?? [], [collectionsData]);

	const handleSelectGroup = (title: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("collection", title);
		router.push(`?${params.toString()}`);
	};

	return (
		<div className='w-full px-3 flex flex-col items-center'>
			<div
				className='flex w-full p-2  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
            shadow-[inset_0_0_6px_rgba(0,0,0,0.8)]
            transition
			 shadow-3xl '
			>
				<CollectionGroup groups={groupsData?.collectionGroups ?? []} onSelect={handleSelectGroup} active={selectedCollection} />
			</div>

			<div className='w-full grid grid-cols-2 gap-6 mt-4'>
				{collections.map((c: CollectionType, i: number) => (
					<Collection key={i} collection={c} />
				))}
			</div>
		</div>
	);
}
