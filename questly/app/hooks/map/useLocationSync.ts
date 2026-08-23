import { Dispatch, SetStateAction, useEffect } from "react";

import { getLocationsData } from "@/app/types/quest";
import { Filters } from "@/app/components/filters/types";

type Props = {
	locationData?: getLocationsData;
	selectedLocationUuid?: string;
	mapLocation: string;
	setFilters: Dispatch<SetStateAction<Filters>>;
	// Gdy false, hook nic nie robi. Używane przy renderowaniu mapy dla konkretnego
	// questa (questMarkers), gdzie lokacja pochodzi z markerów, a nie z globalnych
	// filtrów, więc nie chcemy nadpisywać filters.mapLocation.
	enabled?: boolean;
};

export function useLocationSync({ locationData, selectedLocationUuid, mapLocation, setFilters, enabled = true }: Props) {
	useEffect(() => {
		if (!enabled) return;
		if (!locationData?.locations.length) return;

		const exists = locationData.locations.some(({ uuid }) => uuid === mapLocation);

		if (!exists) {
			setFilters((prev) => ({
				...prev,
				mapLocation: locationData.locations[0].uuid,
				mapMarkers: []
			}));
		}
	}, [locationData, mapLocation, setFilters, enabled]);

	useEffect(() => {
		if (!enabled) return;

		setFilters((prev) => ({
			...prev,
			mapMarkers: []
		}));
	}, [selectedLocationUuid, setFilters, enabled]);
}
