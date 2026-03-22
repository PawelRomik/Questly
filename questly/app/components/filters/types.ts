export enum SortOption {
	AZ = "az",
	ZA = "za",
	LEVEL_ASC = "levelAsc",
	LEVEL_DESC = "levelDesc"
}

export type Filters = {
	search: string;
	groupByType: boolean;
	sort: SortOption;
	searchTags: boolean;
};
