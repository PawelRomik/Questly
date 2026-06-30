import { CompletedOption, Filters, HiddenAchievementsOption, MissableOption, SortOption } from "@/app/components/filters/types";
import { DLC } from "@/app/types/quest";

export type Page = "quests" | "achievements" | "collectibles";

type CheckboxConfig = {
	key: keyof Filters;
	label: string;
	value: boolean;
	disabled?: boolean;
};

type SelectKey = "missables" | "sort" | "hiddenAchievements" | "completed" | "dlc";

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

const COMPLETED_OPTIONS = [
	{ value: CompletedOption.DEFAULT, label: "Default" },
	{ value: CompletedOption.SHOW_FIRST, label: "Show first" },
	{ value: CompletedOption.SHOW_LAST, label: "Show last" },
	{ value: CompletedOption.HIDE, label: "Hide" }
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
	filters: Filters,
	dlcs: DLC[]
): {
	checkboxes: CheckboxConfig[];
	selects: SelectConfig[];
} {
	const dlcOptions = [
		{ value: "all", label: "All DLCs" },
		...dlcs.map((dlc) => ({
			value: dlc.uuid,
			label: dlc.title
		}))
	];

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
					},
					{
						key: "completed",
						label: "Completed",
						options: COMPLETED_OPTIONS,
						value: filters.completed
					},
					{
						key: "dlc",
						label: "DLC",
						options: dlcOptions,
						value: filters.dlc
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
					},
					{
						key: "completed",
						label: "Completed",
						options: COMPLETED_OPTIONS,
						value: filters.completed
					},
					{
						key: "dlc",
						label: "DLC",
						options: dlcOptions,
						value: filters.dlc
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
				selects: [
					{
						key: "missables",
						label: "Missables",
						options: MISSABLE_OPTIONS,
						value: filters.missables
					},
					{
						key: "completed",
						label: "Completed",
						options: COMPLETED_OPTIONS,
						value: filters.completed
					},
					{
						key: "dlc",
						label: "DLC",
						options: dlcOptions,
						value: filters.dlc
					},
					{
						key: "sort",
						label: "Sort",
						options: getSortOptions(false),
						value: filters.sort
					}
				]
			};
	}
}
