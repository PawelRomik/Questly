"use client";

import { useParams } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { useFilters } from "@/app/context/FiltersContext";
import { GAME_THEME } from "@/app/data/games";
import logo from "../../../public/assets/witcher3logo.webp";
import geralt from "../../../public/assets/geralt.webp";
import Image from "next/image";
import { SearchSettings } from "@/app/components/filters/SearchSettings";
import { StatisticList } from "@/app/components/statistics/StatisticsList";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { Filters } from "@/app/components/filters/types";

export function SearchBar() {
	const { filters, setFilters } = useFilters();
	const params = useParams();
	const styles = filterVariants["witcher3"];
	const section = params.content as string;
	const isQuestPage = section === "quests";

	const isLocked = filters.groupByQuestGroup;

	const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
		setFilters((prev) => ({
			...prev,
			[key]: value
		}));
	};

	const game = GAME_THEME[params.game as keyof typeof GAME_THEME] ?? GAME_THEME.default;

	return (
		<div className={styles.base()}>
			<div className={styles.header.base()}>
				<Image src={logo} alt={game.name} className={styles.header.logo()} />
			</div>

			<div className={styles.inputWrapper.base()}>
				<Image src={geralt} alt={game.name} className={styles.inputWrapper.character()} />
				<SearchInput value={filters.search} onChange={(v) => update("search", v)} />
			</div>

			{isQuestPage && <SearchSettings filters={filters} isLocked={isLocked} update={update} />}
			<StatisticList stats={[{ label: "Quests" }, { label: "Achievements" }, { label: "Collectibles" }, { label: "Map Markers" }]} />
		</div>
	);
}
