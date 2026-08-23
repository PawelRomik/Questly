"use client";

import { GameMapContainer } from "@/app/components/map";
import { MapMarkerType } from "@/app/components/map/GameMap";

import ModalMapCloseButton from "@/app/components/quest-modal/parts/map/ModalMapCloseButton";
import ModalMapNavigation from "@/app/components/quest-modal/parts/map/ModalMapNavigation";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useApollo } from "@/app/hooks/useApollo";
import { GET_LOCATIONS } from "@/app/lib/queries";
import { getLocationsData, getLocationsVars } from "@/app/types/quest";
import { useMemo, useState } from "react";
import { useLocale } from "next-intl";

type Props = {
	mapMarkers: MapMarkerType[];
	setMapStateVisible: (val: boolean) => void;
	game: string;
};

type LocationGroup = {
	uuid: string;
	markers: MapMarkerType[];
};

export default function ModalMapContainer({ mapMarkers, setMapStateVisible, game }: Props) {
	const theme = getTheme("questModal", game);
	const locale = useLocale();

	const { data: locationData } = useApollo<getLocationsData, getLocationsVars>(GET_LOCATIONS, {
		locale: locale,
		game
	});

	const locationGroups = useMemo<LocationGroup[]>(() => {
		const groups = new Map<string, MapMarkerType[]>();

		for (const marker of mapMarkers) {
			const key = marker.location?.uuid ?? "unknown";
			const existing = groups.get(key);

			if (existing) {
				existing.push(marker);
			} else {
				groups.set(key, [marker]);
			}
		}

		return Array.from(groups.entries()).map(([uuid, markers]) => ({ uuid, markers }));
	}, [mapMarkers]);

	const [locationIndex, setLocationIndex] = useState(0);

	const hasMultipleLocations = locationGroups.length > 1;
	const currentGroup = locationGroups[locationIndex];
	const currentMarkers = currentGroup?.markers ?? mapMarkers;

	const currentLocationName = useMemo(() => locationData?.locations.find(({ uuid }) => uuid === currentGroup?.uuid)?.name, [locationData, currentGroup]);

	const goToPreviousLocation = () => {
		setLocationIndex((prev) => (prev === 0 ? locationGroups.length - 1 : prev - 1));
	};

	const goToNextLocation = () => {
		setLocationIndex((prev) => (prev === locationGroups.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className={theme.map.modal()}>
			<ModalMapCloseButton game={game} setMapStateVisible={setMapStateVisible} />

			{hasMultipleLocations && (
				<ModalMapNavigation
					game={game}
					currentLocationName={currentLocationName}
					locationIndex={locationIndex}
					locationsCount={locationGroups.length}
					goToPreviousLocation={goToPreviousLocation}
					goToNextLocation={goToNextLocation}
				/>
			)}

			<GameMapContainer key={currentGroup?.uuid ?? "default"} game={game} bigZoom questMarkers={currentMarkers} />
		</div>
	);
}
