"use client";
import { useParams } from "next/navigation";
import { Checkbox } from "./Checkbox";
import { SortSelect } from "./SortSelect";
import { Filters } from "./types";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { MissableSelect } from "@/app/components/filters/MissableSelect";
import { HiddenAchievementSelect } from "@/app/components/filters/HiddenAchievementSelect";

type Props = {
	filters: Filters;
	isLocked: boolean;
	update: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
};

export function SearchSettings({ filters, isLocked, update }: Props) {
	const params = useParams();
	const section = params.content as string;
	const isQuestPage = section === "quests";
	const isAchievementPage = section === "achievements";
	const isCollectionPage = section === "collectibles";

	const styles = useGameStyles(filterVariants);
	const { content } = params;

	if (!isQuestPage && !isAchievementPage && !isCollectionPage) return null;

	return (
		<div className={styles.settings()}>
			<div className={styles.checkboxWrapper()}>
				{isQuestPage && <Checkbox label='Group by type' checked={filters.groupByType} disabled={isLocked} onChange={(v) => update("groupByType", v)} />}
				{(isQuestPage || isAchievementPage) && <Checkbox label='Search in tags' checked={filters.searchTags} onChange={(v) => update("searchTags", v)} />}
				{(isAchievementPage || isQuestPage) && (
					<Checkbox label={`Group by ${content} group`} checked={filters.groupByQuestGroup} onChange={(v) => update("groupByQuestGroup", v)} />
				)}
				{isQuestPage && <Checkbox label='Group by act' checked={filters.groupByAct} disabled={isLocked} onChange={(v) => update("groupByAct", v)} />}
				{isQuestPage && <Checkbox label='Group by location' checked={filters.groupByLocation} disabled={isLocked} onChange={(v) => update("groupByLocation", v)} />}
				{isCollectionPage && <Checkbox label='Search in Items' checked={filters.searchItems} onChange={(v) => update("searchItems", v)} />}
			</div>
			<div className={styles.selectWrapper()}>
				{(isQuestPage || isAchievementPage) && <MissableSelect value={filters.missables} onChange={(v) => update("missables", v)} />}
				{(isQuestPage || isAchievementPage) && <SortSelect value={filters.sort} onChange={(v) => update("sort", v)} values={isQuestPage ? ["title", "level"] : ["title"]} />}
				{isAchievementPage && <HiddenAchievementSelect value={filters.hiddenAchievements} onChange={(v) => update("hiddenAchievements", v)} />}
			</div>
		</div>
	);
}
