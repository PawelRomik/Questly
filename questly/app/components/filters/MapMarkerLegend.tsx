"use client";

import FixedImage from "@/app/components/common/FixedImage";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useCompleted } from "@/app/context/CompletedContext";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useParams } from "next/navigation";

export default function MapMarkerLegend() {
	const { filters, setFilters } = useFilters();
	const styles = useGameStyles(filterVariants);
	const params = useParams();
	const game = params.game as string;
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

	return (
		<div className={styles.legend.container()}>
			{filters.mapMarkers.map((marker) => {
				const completed = marker.uuids.filter((uuid) => completedSet.has(uuid)).length;

				return (
					<button key={marker.title} type='button' onClick={() => toggleMarker(marker.title)} className={styles.legend.button()}>
						<FixedImage src={marker.icon} alt={marker.title} className={styles.legend.icon()} />

						<div className={styles.legend.marker.container()}>
							<span className={styles.legend.marker.label(marker.visible)}>{marker.title}</span>

							<span className={styles.legend.marker.count()}>
								{completed}/{marker.count}
							</span>
						</div>
					</button>
				);
			})}
		</div>
	);
}
