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
import LocaleSwitcher from "@/app/components/switchers/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import MapMarkerLegend from "@/app/components/filters/MapMarkerLegend";

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

	const { content } = useParams();

	const t = useTranslations();
	const { character, logo } = useGameAssets();

	return (
		<div className={styles.base()}>
			<div className={styles.header.base()}>
				<FixedImage src={logo} alt={t("common.logo")} className={styles.header.logo()} />
			</div>

			<div className={styles.inputWrapper.base()}>
				<FixedImage src={character ?? ""} alt={t("common.character")} className={styles.inputWrapper.character()} />

				{content == "map" ? <FiltersOptions isLocked={isLocked} update={update} /> : <FilterSearchInput value={filters.search} onChange={(v) => update("search", v)} />}
			</div>

			{content == "map" ? <MapMarkerLegend /> : <FiltersOptions isLocked={isLocked} update={update} />}
			<StatisticList
				stats={[
					{ id: "quests", label: t("quests.quests") },
					{ id: "achievements", label: t("achievements.achievements") },
					{ id: "collections", label: t("collections.collectibles") },
					{ id: "mapMarkers", label: t("map.mapMarkers") }
				]}
			/>
			<LocaleSwitcher />
		</div>
	);
}
