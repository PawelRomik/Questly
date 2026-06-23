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

export type Filters = {
	search: string;
	groupByType: boolean;
	sort: SortOption;
	searchTags: boolean;
	groupByLocation: boolean;
	groupByAct: boolean;
	groupByQuestGroup: boolean;
	searchItems: boolean;
	missables: MissableOption;
};
