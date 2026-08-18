import { MapMarkerType } from "@/app/components/map/GameMap";

export type Item = {
	uuid: string;
	name: string;
	missable: boolean;
	image: string;
	item_type: {
		name: string;
		icon: string;
	};
	amount: number;
	price: number;
	description: string;
	rarity: {
		name: string;
		color: string;
	};
	dlc?: DLC;
	game: string;
};

export type Rewards = {
	experience: number;
	money: number;
	items: Item[];
	other: string;
};

export type TagType = {
	name: string;
};

export type QuestType = {
	name: string;
	uuid: string;
	locale: string;
	icon: string;
	color: string;
};

type FuzzyIndices = readonly [number, number][];

export type QuestWithMatches = Quest & {
	_titleMatch?: FuzzyIndices;
	_tagMatchValue?: string;
	_tagMatchIndices?: FuzzyIndices;
	_dlcMatch?: FuzzyIndices;
	_missableMatch?: FuzzyIndices;
};

export type Location = {
	name: string;
	uuid: string;
	locale: string;
	minimap: string;
	banner: string;
};

export type Character = {
	name: string;
	image: string;
} | null;

export type Game = {
	title: string;
	slug: string;
};

export type Map = {
	x: number;
	y: number;
	z: number;
};

export type Requirement = {
	desc: string;
};

export type QuestAct = {
	title: string;
	order: number;
	locale: string;
	uuid: string;
	icon: string;
};

export type QuestGroup = {
	title: string;
	uuid: string;
	locale: string;
	icon: string;
};
export type DLC = {
	title: string;
	uuid: string;
	color: string;
	icon: string;
};

export type QuestFamily = {
	uuid: string;
	title: string;
	quest_type: {
		icon: string;
	};
};

export type Quest = {
	uuid: string;
	missable?: boolean;
	game: Game;
	quest_type: QuestType;
	title: string;
	map_marker: MapMarkerType;
	next_quests: QuestFamily[];
	prev_quests: QuestFamily[];
	level: number;
	description: string;
	short_desc: string;
	location: Location;
	map: Map;
	character: Character;
	tags: TagType[];
	quest_act: QuestAct;
	quest_groups: QuestGroup[];
	rewards: Rewards;
	dlc: DLC;
	requirement: Requirement[];
};

export type GetQuestsData = {
	quests: Quest[];
};

export type GetQuestsVars = {
	search?: string;
	searchTags?: boolean;
	game?: string;
};

export type getDLCsData = {
	dlcs: DLC[];
};

export type getLocationsData = {
	locations: Location[];
};

export type getDLCsVars = {
	locale: string;
	game: string;
};

export type getLocationsVars = {
	locale: string;
	game: string;
};
