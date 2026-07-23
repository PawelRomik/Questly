import { MapMarkerType } from "@/app/components/map/GameMap";
import { useMemo } from "react";

type Props = {
	visibleMarkers: MapMarkerType[];
	bounds?: [[number, number], [number, number]];
};

export function useMapCenter({ visibleMarkers, bounds }: Props) {
	return useMemo<[number, number]>(() => {
		if (visibleMarkers.length === 1) {
			return [visibleMarkers[0].lat, visibleMarkers[0].lng];
		}

		if (bounds) {
			return [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2];
		}

		return [0, 0];
	}, [visibleMarkers, bounds]);
}
