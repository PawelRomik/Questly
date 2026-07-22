import { DLC, TagType } from "@/app/types/quest";

export type AchievementType = {
	title: string;
	description: string;
	icon: string;
	missable?: boolean;
	game: string;
	uuid: string;
	secret: boolean;
	dlc?: DLC;
	tags: TagType[];

	achievement_group: {
		name: string;
		locale: string;
		uuid: string;
		icon: string;
	};
};

type FuzzyIndices = readonly [number, number][];

export type AchievementWithMatches = AchievementType & {
	_titleMatch?: FuzzyIndices;
	_tagMatchValue?: string;
	_tagMatchIndices?: FuzzyIndices;
	_dlcMatch?: FuzzyIndices;
	_missableMatch?: FuzzyIndices;
};

export type GetAchievementsData = {
	achievements: AchievementType[];
};

export type GetAchievementsVars = {
	game: string;
	locale: string;
};
