export type Rewards = {
	xp: number;
	money: number;
	items: string[];
};

export type Tag = {
	name: string;
};

export type QuestType = {
	name: string;
};

export type Location = {
	Name: string;
};

export type CharacterImage = {
	url: string;
};

export type Character = {
	Name: string;
	Image?: CharacterImage | null;
} | null;

export type Quest = {
	Title: string;
	level: number;
	Desc: string;
	ShortDesc: string;
	rewards: Rewards;

	quest_type?: QuestType | null;
	location?: Location | null;
	character: Character;
	tags: Tag[];
};

export type GetQuestsData = {
	quests: Quest[];
};

export type GetQuestsVars = {
	search?: string;
};
