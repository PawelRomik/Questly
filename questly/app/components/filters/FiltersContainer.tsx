"use client";

import { FilterSearchInput } from "./FilterSearchInput";
import { useFilters } from "@/app/context/FiltersContext";
import { StatisticList } from "@/app/components/statistics/StatisticsList";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { Filters } from "@/app/components/filters/types";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
import { FiltersOptions } from "@/app/components/filters/FiltersOptions";

export function FiltersContainer() {
	const { filters, setFilters } = useFilters();
	const styles = useGameStyles(filterVariants);

	const isLocked = filters.groupByQuestGroup;

	const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
		setFilters((prev) => ({
			...prev,
			[key]: value
		}));
	};
	const { character, logo } = useGameAssets();

	return (
		<div className={styles.base()}>
			<div className={styles.header.base()}>
				<FixedImage src={logo} alt={"logo"} className={styles.header.logo()} />
			</div>

			<div className={styles.inputWrapper.base()}>
				<FixedImage src={character ?? ""} alt='character' className={styles.inputWrapper.character()} />
				<FilterSearchInput value={filters.search} onChange={(v) => update("search", v)} />
			</div>

			{<FiltersOptions isLocked={isLocked} update={update} />}
			<StatisticList stats={[{ label: "Quests" }, { label: "Achievements" }, { label: "Collectibles" }, { label: "Map Markers" }]} />
		</div>
	);
}
