import { Dispatch, SetStateAction, useEffect } from "react";

import { getLocationsData } from "@/app/types/quest";
import { Filters } from "@/app/components/filters/types";

type Props = {
	locationData?: getLocationsData;
	selectedLocationUuid?: string;
	mapLocation: string;
	setFilters: Dispatch<SetStateAction<Filters>>;
	enabled?: boolean;
};

export function useLocationSync({ locationData, mapLocation, setFilters, enabled = true }: Props) {
	useEffect(() => {
		if (!enabled) return;
		if (!locationData?.locations.length) return;

		const exists = locationData.locations.some(({ uuid }) => uuid === mapLocation);

		if (!exists) {
			setFilters((prev) => ({
				...prev,
				mapLocation: locationData.locations[0].uuid
			}));
		}
	}, [locationData, mapLocation, setFilters, enabled]);
}
