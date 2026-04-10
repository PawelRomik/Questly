export type Achievement = {
	title: string;
	description: string;
	icon: {
		url: string;
	};
	game: string;
	uuid: string;
	secret: boolean;
};

export type GetAchievementsData = {
	achievements: Achievement[];
};

export type GetAchievementsVars = {
	game: string;
	search: string;
};
