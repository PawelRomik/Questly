import { Game, Item } from "@/app/types/quest";

export type CollectionType = {
	title: string;
	items: Item[];
	uuid: string;
	game: Game;
	type: "single" | "group";
};

export type CollectionGroup = {
	title: string;
	collections: CollectionType[];
	game: Game;
};

export type GetCollectionGroupsData = {
	collectionGroups: {
		title: string;
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
