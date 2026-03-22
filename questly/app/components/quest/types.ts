import { SortOption } from "@/app/components/filters/types";

export type QuestProps = {
	title: string;
	shortDesc: string;
	level: number;
	tags: string[];
	locationImage: string;
	search: string;
	searchTags: boolean;
};

export type QuestListProps = {
	search: string;
	groupByType: boolean;
	sort: SortOption;
	searchTags: boolean;
};
