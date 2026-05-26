export type AchievementType = {
	title: string;
	description: string;
	icon: {
		url: string;
	};
	game: string;
	uuid: string;
	secret: boolean;
	achievement_group: {
		name: string;
		icon: {
			url: string;
		};
	};
};

export type GetAchievementsData = {
	achievements: AchievementType[];
};

export type GetAchievementsVars = {
	game: string;
	search: string;
};
