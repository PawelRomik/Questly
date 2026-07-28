"use client";

import { useParams, useSearchParams } from "next/navigation";
import FilterSelect from "./FilterSelect";
import { Filters } from "./types";
import getFilterConfig, { Page } from "@/app/lib/utils/getFilterConfig";
import { useFilters } from "@/app/context/FiltersContext";
import { FilterCheckbox } from "@/app/components/filters/FilterCheckbox";
import { useApollo } from "@/app/hooks/useApollo";
import { GET_DLCS, GET_LOCATIONS } from "@/app/lib/queries";
import { getDLCsData, getDLCsVars, getLocationsData, getLocationsVars } from "@/app/types/quest";
import { useLocale, useTranslations } from "next-intl";
import SyncMarkersButton from "@/app/components/filters/SyncMarkersButton";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	isLocked: boolean;
	update: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
	game: string;
};

export function FiltersOptions({ isLocked, update, game }: Props) {
	const { content } = useParams();
	const gameParam = Array.isArray(game) ? (game[0] ?? "") : (game ?? "");
	const { filters } = useFilters();
	const locale = useLocale();
	const t = useTranslations("filters");

	const { data: dlcData } = useApollo<getDLCsData, getDLCsVars>(GET_DLCS, {
		locale,
		game: gameParam
	});

	const { data: locationData } = useApollo<getLocationsData, getLocationsVars>(GET_LOCATIONS, {
		locale,
		game: gameParam
	});

	const searchParams = useSearchParams();

	const mapLocation = searchParams.get("mapLocation");

	const selectedLocation = locationData?.locations.find(({ uuid }) => uuid === mapLocation);

	if (!["quests", "achievements", "collectibles", "map"].includes(content as string)) return null;

	const { checkboxes, selects } = getFilterConfig(content as Page, isLocked, filters, dlcData?.dlcs ?? [], locationData?.locations ?? [], t);
	const theme = getTheme("filter", game);

	return (
		<div className={theme.settings()}>
			<div className={theme.selectWrapper()}>
				{checkboxes.map(({ key, label, value, disabled }) => (
					<FilterCheckbox game={game} key={key} label={label} checked={value} disabled={disabled} onChange={(v) => update(key, v)} />
				))}

				{selects.map(({ key, label, value, options }) => (
					<FilterSelect game={game} key={key} label={label} value={value} options={options} onChange={(v) => update(key, v as Filters[typeof key])} />
				))}
				{content == "map" && <SyncMarkersButton game={game} selectedLocation={selectedLocation?.uuid ?? ""} />}
			</div>
		</div>
	);
}
