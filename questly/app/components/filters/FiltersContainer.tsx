"use client";

import { FilterSearchInput } from "./FilterSearchInput";
import { useFilters } from "@/app/context/FiltersContext";
import { StatisticList } from "@/app/components/statistics/StatisticsList";
import { Filters } from "@/app/components/filters/types";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
import { FiltersOptions } from "@/app/components/filters/FiltersOptions";
import LocaleSwitcher from "@/app/components/switchers/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import MapMarkerLegend from "@/app/components/filters/MapMarkerLegend";
import questlyLogo from "../../../public/assets/logo.png";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: string;
};

export function FiltersContainer({ game }: Props) {
	const { filters, setFilters } = useFilters();

	const isLocked = filters.groupByQuestGroup;

	const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
		setFilters((prev) => ({
			...prev,
			[key]: value
		}));
	};

	const theme = getTheme("filter", game);

	const { content } = useParams();

	const t = useTranslations();
	const { character, logo } = useGameAssets();

	return (
		<div className={theme.base()}>
			<FixedImage src={questlyLogo} alt='logo' className={theme.icon()} />
			<div className={theme.header.base()}>
				<FixedImage src={logo} alt={t("common.logo")} className={theme.header.logo()} />
			</div>

			<div className={theme.inputWrapper.base()}>
				<FixedImage src={character ?? ""} alt={t("common.character")} className={theme.inputWrapper.character()} />

				{content == "map" ? (
					<FiltersOptions game={game} isLocked={isLocked} update={update} />
				) : (
					<FilterSearchInput game={game} value={filters.search} onChange={(v) => update("search", v)} />
				)}
			</div>

			{content == "map" ? <MapMarkerLegend game={game} /> : <FiltersOptions game={game} isLocked={isLocked} update={update} />}
			<StatisticList game={game} />
			<LocaleSwitcher game={game} />
		</div>
	);
}
