import { Game, Item } from "@/app/types/quest";

export type CollectionType = {
	title: string;
	items: Item[];
	uuid: string;
	game: Game;
	type: "single" | "group";
	collection_groups: CollectionGroup[];
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
