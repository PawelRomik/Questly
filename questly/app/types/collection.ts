import { DLC, Game, Item } from "@/app/types/quest";

export type CollectionType = {
	title: string;
	items: Item[];
	uuid: string;
	dlc?: DLC;
	game: Game;
	type: "single" | "group";
	collection_groups: CollectionGroup[];
};

type FuzzyIndices = readonly [number, number][];

export type CollectionWithMatches = CollectionType & {
	_titleMatch?: FuzzyIndices;
};

export type CollectionGroup = {
	title: string;
	uuid: string;
	game: Game;
};

export type GetCollectionGroupsData = {
	collectionGroups: {
		title: string;
		uuid: string;
	}[];
};

export type GetCollectionsData = {
	collectionGroups: {
		title: string;
		collections: CollectionType[];
	}[];
};

export type GetCollectionsVars = {
	collectionGroup: string;
};
