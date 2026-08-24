"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";

import FixedImage from "@/app/components/common/FixedImage";
import { useCompleted } from "@/app/context/CompletedContext";
import { useFilters } from "@/app/context/FiltersContext";
import { getTheme } from "@/app/lib/utils/getTheme";
import { groupMarkers } from "@/app/lib/utils/map/groupMarkers";
import { useLocalizedMarkersList } from "@/app/hooks/useLocalizedMarkersList";
import { GET_MAP_MARKERS } from "@/app/lib/queries";
import { MapMarkerType } from "@/app/components/map/GameMap";

type Props = {
	game: string;
};

export default function MapMarkerLegend({ game }: Props) {
	const { filters, setFilters } = useFilters();
	const { completedSet } = useCompleted(game, "mapMarkers");
	const locale = useLocale();

	const { markers: rawMarkers } = useLocalizedMarkersList<MapMarkerType, { location: string }>({
		locale,
		query: GET_MAP_MARKERS,
		vars: {
			location: filters.mapLocation
		},
		getItems: (data) => data?.mapMarkers ?? []
	});

	const groups = useMemo(() => groupMarkers(rawMarkers.filter((m) => !m.hidden)), [rawMarkers]);

	const toggleMarker = (title: string) => {
		setFilters((prev) => {
			const isHidden = prev.disabledMarkers.includes(title);

			return {
				...prev,
				disabledMarkers: isHidden ? prev.disabledMarkers.filter((t) => t !== title) : [...prev.disabledMarkers, title]
			};
		});
	};

	const theme = getTheme("filter", game);

	return (
		<div className={theme.legend.container()}>
			{groups.map((group) => {
				const visible = !filters.disabledMarkers.includes(group.title);
				const completed = group.uuids.filter((uuid) => completedSet.has(uuid)).length;

				return (
					<button key={group.title} type='button' onClick={() => toggleMarker(group.title)} className={theme.legend.button()}>
						<FixedImage src={group.icon} alt={group.title} className={theme.legend.icon()} />

						<div className={theme.legend.marker.container()}>
							<span className={theme.legend.marker.label(visible)}>{group.title}</span>

							<span className={theme.legend.marker.count()}>
								{completed}/{group.count}
							</span>
						</div>
					</button>
				);
			})}
		</div>
	);
}
