import { MissableOption } from "@/app/components/filters/types";
import { TagProps } from "@/app/components/tag/Tag";
import { useFilters } from "@/app/context/FiltersContext";

export function getIsActive(props: TagProps, filters: ReturnType<typeof useFilters>["filters"]) {
	const { type, dlc, tag } = props;

	if (type === "missable") return filters.missables === MissableOption.SHOW_ONLY;
	if (type === "dlc") return filters.dlc === dlc;

	return filters.search.toLowerCase() === tag.toLowerCase() && filters.searchTags;
}
