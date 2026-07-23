import { useMemo } from "react";

import { Filters } from "@/app/components/filters/types";
import { filterMarkers } from "@/app/lib/utils/map/filtersMakers";
import { MapMarkerType } from "@/app/components/map/GameMap";

type Props = {
	markers: (MapMarkerType & { completed: boolean })[];
	filters: Filters;
	questMarker?: string;
};

export function useVisibleMarkers(props: Props) {
	return useMemo(() => filterMarkers(props), [props]);
}
