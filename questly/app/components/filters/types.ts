export enum SortOption {
	AZ = "az",
	ZA = "za",
	LEVEL_ASC = "levelAsc",
	LEVEL_DESC = "levelDesc"
}

export enum MissableOption {
	DEFAULT = "default",
	SHOW_FIRST = "showFirst",
	SHOW_ONLY = "showOnly"
}

export enum HiddenAchievementsOption {
	HIDE = "hide",
	REVEAL = "reveal"
}

export enum CompletedOption {
	DEFAULT = "default",
	SHOW_FIRST = "showFirst",
	SHOW_LAST = "showLast",
	HIDE = "hide"
}

export enum CompletedMarkersOption {
	SHOW = "show",
	HIDE = "hide"
}

export type MapMarkerFilter = {
	title: string;
	icon: string;
	count: number;
	visible: boolean;
	uuids: string[];
};

export type Filters = {
	completed: CompletedOption;
	dlc: string;
	search: string;
	hiddenAchievements: HiddenAchievementsOption;
	groupByType: boolean;
	sort: SortOption;
	searchTags: boolean;
	groupByLocation: boolean;
	groupByAct: boolean;
	groupByQuestGroup: boolean;
	searchItems: boolean;
	missables: MissableOption;
	mapLocation: string;
	completedMarkers: CompletedMarkersOption;
	mapMarkers: MapMarkerFilter[];
};
