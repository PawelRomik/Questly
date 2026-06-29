import { Filters, HiddenAchievementsOption, MissableOption, SortOption } from "@/app/components/filters/types";

export type Page = "quests" | "achievements" | "collectibles";

type CheckboxConfig = {
	key: keyof Filters;
	label: string;
	value: boolean;
	disabled?: boolean;
};

type SelectKey = "missables" | "sort" | "hiddenAchievements";

type SelectConfig = {
	key: SelectKey;
	label: string;
	options: { value: string; label: string }[];
	value: string;
};

const HIDDEN_OPTIONS = [
	{ value: HiddenAchievementsOption.HIDE, label: "Hide" },
	{ value: HiddenAchievementsOption.REVEAL, label: "Show" }
];

const MISSABLE_OPTIONS = [
	{ value: MissableOption.DEFAULT, label: "Default" },
	{ value: MissableOption.SHOW_FIRST, label: "Show first" },
	{ value: MissableOption.SHOW_ONLY, label: "Show only" }
];

export function getSortOptions(hasLevel: boolean) {
	return [
		{ value: SortOption.AZ, label: "Title A-Z" },
		{ value: SortOption.ZA, label: "Title Z-A" },

		...(hasLevel
			? [
					{ value: SortOption.LEVEL_ASC, label: "Level ↑" },
					{ value: SortOption.LEVEL_DESC, label: "Level ↓" }
				]
			: [])
	];
}

export default function getFilterConfig(
	page: Page,
	isLocked: boolean,
	filters: Filters
): {
	checkboxes: CheckboxConfig[];
	selects: SelectConfig[];
} {
	switch (page) {
		case "quests":
			return {
				checkboxes: [
					{
						key: "groupByType",
						label: "Group by type",
						value: filters.groupByType,
						disabled: isLocked
					},
					{
						key: "searchTags",
						value: filters.searchTags,
						label: "Search in tags",
						disabled: isLocked
					},
					{
						key: "groupByQuestGroup",
						value: filters.groupByQuestGroup,
						label: "Group by quests group"
					},
					{
						key: "groupByAct",
						value: filters.groupByAct,
						label: "Group by act",
						disabled: isLocked
					},
					{
						key: "groupByLocation",
						value: filters.groupByLocation,
						label: "Group by location",
						disabled: isLocked
					}
				],
				selects: [
					{
						key: "missables",
						label: "Missables",
						options: MISSABLE_OPTIONS,
						value: filters.missables
					},
					{
						key: "sort",
						label: "Sort",
						options: getSortOptions(true),
						value: filters.sort
					}
				]
			};

		case "achievements":
			return {
				checkboxes: [
					{
						key: "searchTags",
						label: "Search in tags",
						value: filters.searchTags
					},
					{
						key: "groupByQuestGroup",
						label: "Group by achievements group",
						value: filters.groupByQuestGroup
					}
				],
				selects: [
					{
						key: "missables",
						label: "Missables",
						options: MISSABLE_OPTIONS,
						value: filters.missables
					},
					{
						key: "sort",
						label: "Sort",
						options: getSortOptions(false),
						value: filters.sort
					},
					{
						key: "hiddenAchievements",
						label: "Secret achievements",
						options: HIDDEN_OPTIONS,
						value: filters.hiddenAchievements
					}
				]
			};

		case "collectibles":
			return {
				checkboxes: [
					{
						key: "searchItems",
						label: "Search in items",
						value: filters.searchItems
					}
				],
				selects: []
			};
	}
}
