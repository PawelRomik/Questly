import { CompletedMarkersOption, CompletedOption, Filters, HiddenAchievementsOption, MissableOption, SortOption } from "@/app/components/filters/types";
import { DLC, Location } from "@/app/types/quest";
import { TranslationValues } from "next-intl";

export type Page = "quests" | "achievements" | "collectibles" | "map";

type CheckboxConfig = {
	key: keyof Filters;
	label: string;
	value: boolean;
	disabled?: boolean;
};

type TFunction = (key: string, values?: TranslationValues) => string;

type SelectKey = "missables" | "sort" | "hiddenAchievements" | "completed" | "dlc" | "completedMarkers" | "mapLocation";

type SelectConfig = {
	key: SelectKey;
	label: string;
	options: { value: string; label: string }[];
	value: string;
};

const HIDDEN_OPTIONS = (t: TFunction) => [
	{ value: HiddenAchievementsOption.HIDE, label: t("hide") },
	{ value: HiddenAchievementsOption.REVEAL, label: t("show") }
];

const COMPLETED_OPTIONS = (t: TFunction) => [
	{ value: CompletedOption.DEFAULT, label: t("default") },
	{ value: CompletedOption.SHOW_FIRST, label: t("showFirst") },
	{ value: CompletedOption.SHOW_LAST, label: t("showLast") },
	{ value: CompletedOption.HIDE, label: t("hide") }
];

const MISSABLE_OPTIONS = (t: TFunction) => [
	{ value: MissableOption.DEFAULT, label: t("default") },
	{ value: MissableOption.SHOW_FIRST, label: t("showFirst") },
	{ value: MissableOption.SHOW_ONLY, label: t("showOnly") }
];

const COMPLETED_MARKERS_OPTIONS = (t: TFunction) => [
	{
		value: CompletedMarkersOption.SHOW,
		label: t("show")
	},
	{
		value: CompletedMarkersOption.HIDE,
		label: t("hide")
	}
];

export function getSortOptions(hasLevel: boolean, t: TFunction) {
	return [
		{ value: SortOption.AZ, label: t("titleAZ") },
		{ value: SortOption.ZA, label: t("titleZA") },
		...(hasLevel
			? [
					{ value: SortOption.LEVEL_ASC, label: t("levelAsc") },
					{ value: SortOption.LEVEL_DESC, label: t("levelDesc") }
				]
			: [])
	];
}

export default function getFilterConfig(
	page: Page,
	isLocked: boolean,
	filters: Filters,
	dlcs: DLC[],
	locations: Location[],
	t: TFunction
): {
	checkboxes: CheckboxConfig[];
	selects: SelectConfig[];
} {
	const dlcOptions = [
		{ value: "all", label: t("allDlcs") },
		...dlcs.map((dlc) => ({
			value: dlc.uuid,
			label: dlc.title
		}))
	];

	const locationOptions = [
		...locations.map((loc) => ({
			value: loc.uuid,
			label: loc.name
		}))
	];

	switch (page) {
		case "quests":
			return {
				checkboxes: [
					{
						key: "groupByType",
						label: t("groupByType"),
						value: filters.groupByType,
						disabled: isLocked
					},
					{
						key: "searchTags",
						value: filters.searchTags,
						label: t("searchInTags"),
						disabled: isLocked
					},
					{
						key: "groupByQuestGroup",
						value: filters.groupByQuestGroup,
						label: t("groupByQuestGroup")
					},
					{
						key: "groupByAct",
						value: filters.groupByAct,
						label: t("groupByAct"),
						disabled: isLocked
					},
					{
						key: "groupByLocation",
						value: filters.groupByLocation,
						label: t("groupByLocation"),
						disabled: isLocked
					}
				],
				selects: [
					{
						key: "missables",
						label: t("missables"),
						options: MISSABLE_OPTIONS(t),
						value: filters.missables
					},
					{
						key: "sort",
						label: t("sort"),
						options: getSortOptions(true, t),
						value: filters.sort
					},
					{
						key: "completed",
						label: t("completed"),
						options: COMPLETED_OPTIONS(t),
						value: filters.completed
					},
					{
						key: "dlc",
						label: t("dlc"),
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
						label: t("searchInTags"),
						value: filters.searchTags
					},
					{
						key: "groupByQuestGroup",
						label: t("groupByAchievementGroup"),
						value: filters.groupByQuestGroup
					}
				],
				selects: [
					{
						key: "missables",
						label: t("missables"),
						options: MISSABLE_OPTIONS(t),
						value: filters.missables
					},
					{
						key: "sort",
						label: t("sort"),
						options: getSortOptions(false, t),
						value: filters.sort
					},
					{
						key: "hiddenAchievements",
						label: t("secretAchievements"),
						options: HIDDEN_OPTIONS(t),
						value: filters.hiddenAchievements
					},
					{
						key: "completed",
						label: t("completed"),
						options: COMPLETED_OPTIONS(t),
						value: filters.completed
					},
					{
						key: "dlc",
						label: t("dlc"),
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
						label: t("searchInItems"),
						value: filters.searchItems
					}
				],
				selects: [
					{
						key: "missables",
						label: t("missables"),
						options: MISSABLE_OPTIONS(t),
						value: filters.missables
					},
					{
						key: "completed",
						label: t("completed"),
						options: COMPLETED_OPTIONS(t),
						value: filters.completed
					},
					{
						key: "dlc",
						label: t("dlc"),
						options: dlcOptions,
						value: filters.dlc
					},
					{
						key: "sort",
						label: t("sort"),
						options: getSortOptions(false, t),
						value: filters.sort
					}
				]
			};
		case "map":
			return {
				checkboxes: [],
				selects: [
					{
						key: "mapLocation",
						label: t("location"),
						options: locationOptions,
						value: filters.mapLocation
					},
					{
						key: "completedMarkers",
						label: t("completedMarkers"),
						options: COMPLETED_MARKERS_OPTIONS(t),
						value: filters.completedMarkers
					}
				]
			};
	}
}
