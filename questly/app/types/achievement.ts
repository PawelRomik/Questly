import { DLC } from "@/app/types/quest";

export type AchievementType = {
	title: string;
	description: string;
	icon: {
		url: string;
	};
	missable?: boolean;
	game: string;
	uuid: string;
	secret: boolean;
	dlc?: DLC;

	achievement_group: {
		name: string;
		locale: string;
		uuid: string;
		icon: {
			url: string;
		};
	};
};

type FuzzyIndices = readonly [number, number][];

export type AchievementWithMatches = AchievementType & {
	_titleMatch?: FuzzyIndices;
};

export type GetAchievementsData = {
	achievements: AchievementType[];
};

export type GetAchievementsVars = {
	game: string;
	locale: string;
};
