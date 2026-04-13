export type AchievementType = {
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
	achievements: AchievementType[];
};

export type GetAchievementsVars = {
	game: string;
	search: string;
};
