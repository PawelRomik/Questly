export type Item = {
	uuid: string;
	name: string;
	image: {
		url: string;
	};
	item_type: {
		name: string;
		icon: {
			url: string;
		};
	};
	amount: number;
	price: number;
	description: string;
	rarity: {
		name: string;
		color: string;
	};
	game: string;
};

export type Rewards = {
	experience: number;
	money: number;
	items: Item[];
	other: string;
};

export type Tag = {
	name: string;
};

export type QuestType = {
	name: string;
	icon: {
		url: string;
	};
	color: string;
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
		quest_type: {
			icon: {
				url: string;
			};
		};
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

export type QuestAct = {
	title: string;
	order: number;
	icon: {
		url: string;
	};
};

export type QuestGroup = {
	title: string;
	icon: {
		url: string;
	};
};

export type Quest = {
	uuid: string;
	game: Game;
	quest_type: QuestType;
	title: string;
	level: number;
	description: string;
	short_desc: string;
	location: Location;
	map: Map;
	character: Character;
	tags: Tag[];
	quest_act: QuestAct;
	quest_groups: QuestGroup[];
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
