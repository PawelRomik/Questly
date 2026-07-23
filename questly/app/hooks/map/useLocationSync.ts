import { Dispatch, SetStateAction, useEffect } from "react";

import { getLocationsData } from "@/app/types/quest";
import { Filters } from "@/app/components/filters/types";

type Props = {
	locationData?: getLocationsData;
	selectedLocationUuid?: string;
	mapLocation: string;
	setFilters: Dispatch<SetStateAction<Filters>>;
};

export function useLocationSync({ locationData, selectedLocationUuid, mapLocation, setFilters }: Props) {
	useEffect(() => {
		if (!locationData?.locations.length) return;

		const exists = locationData.locations.some(({ uuid }) => uuid === mapLocation);

		if (!exists) {
			setFilters((prev) => ({
				...prev,
				mapLocation: locationData.locations[0].uuid,
				mapMarkers: []
			}));
		}
	}, [locationData, mapLocation, setFilters]);

	useEffect(() => {
		setFilters((prev) => ({
			...prev,
			mapMarkers: []
		}));
	}, [selectedLocationUuid, setFilters]);
}
