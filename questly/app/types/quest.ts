export type Rewards = {
	experience: number;
	money: number;
	items: {
		image: {
			url: string;
		};
		name: string;
	}[];
	other: string;
};

export type Tag = {
	name: string;
};

export type QuestType = {
	name: string;
};

export type Location = {
	name: string;
	minimap: {
		url: string;
	};
	banner: {
		url: string;
	};
};

export type Character = {
	name: string;
	image: {
		url: string;
	};
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
	level: number;
	type: string;
	quest: {
		title: string;
		uuid: string;
	};
	description: string;
	character: {
		name: string;
	};
	item: {
		name: string;
	};
	item_amount: number;
};

export type Quest = {
	uuid: string;
	game: Game;
	quest_type?: QuestType;
	title: string;
	level: number;
	description: string;
	short_desc: string;
	location: Location;
	map: Map;
	character: Character;
	tags: Tag[];
	rewards: Rewards;
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
