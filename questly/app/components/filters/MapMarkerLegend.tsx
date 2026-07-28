"use client";

import FixedImage from "@/app/components/common/FixedImage";
import { useCompleted } from "@/app/context/CompletedContext";
import { useFilters } from "@/app/context/FiltersContext";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: string;
};

export default function MapMarkerLegend({ game }: Props) {
	const { filters, setFilters } = useFilters();
	const { completedSet } = useCompleted(game, "mapMarkers");

	const toggleMarker = (title: string) => {
		setFilters((prev) => ({
			...prev,
			mapMarkers: prev.mapMarkers.map((marker) =>
				marker.title === title
					? {
							...marker,
							visible: !marker.visible
						}
					: marker
			)
		}));
	};

	const theme = getTheme("filter", game);

	return (
		<div className={theme.legend.container()}>
			{filters.mapMarkers.map((marker) => {
				const completed = marker.uuids.filter((uuid) => completedSet.has(uuid)).length;

				return (
					<button key={marker.title} type='button' onClick={() => toggleMarker(marker.title)} className={theme.legend.button()}>
						<FixedImage src={marker.icon} alt={marker.title} className={theme.legend.icon()} />

						<div className={theme.legend.marker.container()}>
							<span className={theme.legend.marker.label(marker.visible)}>{marker.title}</span>

							<span className={theme.legend.marker.count()}>
								{completed}/{marker.count}
							</span>
						</div>
					</button>
				);
			})}
		</div>
	);
}
