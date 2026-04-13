import { SortOption } from "@/app/components/filters/types";

export type QuestProps = {
	title: string;
	shortDesc: string;
	level: number;
	tags: string[];
	locationImage: string;
	search: string;
	searchTags: boolean;
	completed: boolean;
	characterImage: string;
	onToggle: () => void;
};

export type QuestListProps = {
	search: string;
	groupByType: boolean;
	sort: SortOption;
	searchTags: boolean;
	groupByLocation: boolean;
};
