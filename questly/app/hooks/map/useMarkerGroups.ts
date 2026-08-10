import { Dispatch, SetStateAction, useEffect } from "react";

import { Filters } from "@/app/components/filters/types";
import { MapMarkerType } from "@/app/components/map/GameMap";
import { groupMarkers } from "@/app/lib/utils/map/groupMarkers";

type Props = {
	markers: MapMarkerType[];

	setFilters: Dispatch<SetStateAction<Filters>>;
};

export function useMarkerGroups({ markers, setFilters }: Props) {
	useEffect(() => {
		if (!markers.length) return;

		setFilters((prev) => {
			if (prev.mapMarkers.length) {
				return prev;
			}

			return {
				...prev,
				mapMarkers: groupMarkers(markers)
			};
		});
	}, [markers, setFilters]);
}
