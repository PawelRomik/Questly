import { SortOption } from "@/app/components/filters/types";
import { QuestType, Rewards } from "@/app/types/quest";

export type QuestProps = {
	title: string;
	shortDesc: string;
	level: number;
	tags: string[];
	locationImage: string;
	search: string;
	searchTags: boolean;
	completed: boolean;
	rewards: Rewards;
	type: QuestType;
	onToggle: () => void;
};

export type QuestListProps = {
	search: string;
	groupByType: boolean;
	sort: SortOption;
	searchTags: boolean;
	groupByLocation: boolean;
};
