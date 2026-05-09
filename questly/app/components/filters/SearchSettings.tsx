import { Checkbox } from "./Checkbox";
import { SortSelect } from "./SortSelect";
import { Filters } from "./types";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";

type Props = {
	filters: Filters;
	isLocked: boolean;
	update: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
};

export function SearchSettings({ filters, isLocked, update }: Props) {
	const styles = filterVariants["witcher3"];
	return (
		<div className={styles.settings()}>
			<Checkbox label='Group by type' checked={filters.groupByType} disabled={isLocked} onChange={(v) => update("groupByType", v)} />
			<Checkbox label='Search in tags' checked={filters.searchTags} onChange={(v) => update("searchTags", v)} />
			<Checkbox label='Group by quest group' checked={filters.groupByQuestGroup} onChange={(v) => update("groupByQuestGroup", v)} />
			<Checkbox label='Group by act' checked={filters.groupByAct} disabled={isLocked} onChange={(v) => update("groupByAct", v)} />
			<Checkbox label='Group by location' checked={filters.groupByLocation} disabled={isLocked} onChange={(v) => update("groupByLocation", v)} />
			<SortSelect value={filters.sort} onChange={(v) => update("sort", v)} />
		</div>
	);
}
