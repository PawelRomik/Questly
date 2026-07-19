"use client";

import { useParams } from "next/navigation";
import FilterSelect from "./FilterSelect";
import { Filters } from "./types";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import getFilterConfig, { Page } from "@/app/lib/utils/getFilterConfig";
import { useFilters } from "@/app/context/FiltersContext";
import { FilterCheckbox } from "@/app/components/filters/FilterCheckbox";
import { useApollo } from "@/app/hooks/useApollo";
import { GET_DLCS } from "@/app/lib/queries";
import { getDLCsData, getDLCsVars } from "@/app/types/quest";
import { useLocale, useTranslations } from "next-intl";
import SyncMarkersButton from "@/app/components/filters/SyncMarkersButton";

type Props = {
	isLocked: boolean;
	update: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
};

export function FiltersOptions({ isLocked, update }: Props) {
	const { content, game } = useParams();
	const gameParam = Array.isArray(game) ? (game[0] ?? "") : (game ?? "");
	const styles = useGameStyles(filterVariants);
	const { filters } = useFilters();
	const locale = useLocale();
	const t = useTranslations("filters");

	const { data } = useApollo<getDLCsData, getDLCsVars>(GET_DLCS, {
		locale,
		game: gameParam
	});

	if (!["quests", "achievements", "collectibles", "map"].includes(content as string)) return null;

	const { checkboxes, selects } = getFilterConfig(content as Page, isLocked, filters, data?.dlcs ?? [], t);

	return (
		<div className={styles.settings()}>
			<div className={styles.selectWrapper()}>
				{checkboxes.map(({ key, label, value, disabled }) => (
					<FilterCheckbox key={key} label={label} checked={value} disabled={disabled} onChange={(v) => update(key, v)} />
				))}

				{selects.map(({ key, label, value, options }) => (
					<FilterSelect key={key} label={label} value={value} options={options} onChange={(v) => update(key, v as Filters[typeof key])} />
				))}
				{content == "map" && <SyncMarkersButton />}
			</div>
		</div>
	);
}
