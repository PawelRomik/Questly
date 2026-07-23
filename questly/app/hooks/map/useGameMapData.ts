import { useMemo } from "react";
import { useApollo } from "@/app/hooks/useApollo";
import { useLocalizedMarkersList } from "@/app/hooks/useLocalizedMarkersList";
import { GET_LOCATIONS, GET_MAP_MARKERS, GET_MAP_VARS } from "@/app/lib/queries";
import { getLocationsData, getLocationsVars } from "@/app/types/quest";

type MapMarkerType = {
	id: number;
	lat: number;
	lng: number;
	uuid: string;
	map_icon: {
		title: string;
		uuid: string;
		icon: string;
	};
	quest: {
		uuid: string;
		title: string;
		quest_type: {
			uuid: string;
			icon: string;
			name: string;
		};
	} | null;
};

export type GetMapMarkersResponse = {
	mapMarkers: MapMarkerType[];
};

export function useGameMapData(game: string, locale: string, selectedLocationUuid?: string) {
	const { data: locationData } = useApollo<getLocationsData, getLocationsVars>(GET_LOCATIONS, {
		locale: "en",
		game
	});

	const selectedLocation = useMemo(() => locationData?.locations.find(({ uuid }) => uuid === selectedLocationUuid), [locationData, selectedLocationUuid]);

	const { markers, loading } = useLocalizedMarkersList<MapMarkerType, { location: string }>({
		locale,
		query: GET_MAP_MARKERS,
		vars: {
			location: selectedLocation?.uuid ?? ""
		},
		getItems: (data) => data?.mapMarkers ?? []
	});

	const { data: boundsData } = useApollo<
		{
			mapVars: {
				config: [[number, number], [number, number]];
			}[];
		},
		{ uuid: string }
	>(GET_MAP_VARS, {
		uuid: selectedLocation?.uuid ?? ""
	});

	const bounds = boundsData?.mapVars?.[0]?.config;

	return {
		locationData,
		selectedLocation,
		markers,
		loading,
		bounds
	};
}
