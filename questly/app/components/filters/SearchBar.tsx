"use client";

import { useParams } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { useFilters } from "@/app/context/FiltersContext";
import { GAME_THEME } from "@/app/data/games";
import { SearchSettings } from "@/app/components/filters/SearchSettings";
import { StatisticList } from "@/app/components/statistics/StatisticsList";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { Filters } from "@/app/components/filters/types";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";

export function SearchBar() {
	const { filters, setFilters } = useFilters();
	const params = useParams();
	const styles = useGameStyles(filterVariants);

	const isLocked = filters.groupByQuestGroup;

	const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
		setFilters((prev) => ({
			...prev,
			[key]: value
		}));
	};
	const { character, logo } = useGameAssets();

	const game = GAME_THEME[params.game as keyof typeof GAME_THEME] ?? GAME_THEME.default;

	return (
		<div className={styles.base()}>
			<div className={styles.header.base()}>
				<FixedImage src={logo?.url || ""} alt={game.name} className={styles.header.logo()} />
			</div>

			<div className={styles.inputWrapper.base()}>
				<FixedImage src={character?.url || ""} alt={game.name} className={styles.inputWrapper.character()} />
				<SearchInput value={filters.search} onChange={(v) => update("search", v)} />
			</div>

			{<SearchSettings filters={filters} isLocked={isLocked} update={update} />}
			<StatisticList stats={[{ label: "Quests" }, { label: "Achievements" }, { label: "Collectibles" }, { label: "Map Markers" }]} />
		</div>
	);
}
