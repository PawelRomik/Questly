"use client";

import MapClickHandler from "@/app/components/map/MapClickHandler";
import MapInfo from "@/app/components/map/MapInfo";
import MapMarker from "@/app/components/map/MapMarker";
import MapResizeObserver from "@/app/components/map/MapResizeObserver";
import { mapVariants } from "@/app/components/map/variant/mapVariants";
import { useCompleted } from "@/app/context/CompletedContext";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameMapData } from "@/app/hooks/map/useGameMapData";
import { useLocationSync } from "@/app/hooks/map/useLocationSync";
import { useMapCenter } from "@/app/hooks/map/useMapCenter";
import { useMarkerGroups } from "@/app/hooks/map/useMarkerGroups";
import { useVisibleMarkers } from "@/app/hooks/map/useVisibleMarkers";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { getMapName } from "@/app/lib/utils/map/getMapName";
import { getMarkerDisplay } from "@/app/lib/utils/map/getMarkerDisplay";
import "leaflet/dist/leaflet.css";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export type MarkerGroup = {
	title: string;
	icon: string;
	count: number;
	visible: boolean;
	isQuest: boolean;
	uuids: string[];
};

export type MapMarkerType = {
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

type Props = {
	bigZoom?: boolean;
	questMarker?: string;
};

export default function GameMap({ bigZoom = false, questMarker }: Props) {
	const locale = useLocale();

	const styles = useGameStyles(mapVariants);
	const [selectedMarker, setSelectedMarker] = useState<MapMarkerType | null>(null);
	const { filters, setFilters } = useFilters();
	const params = useParams();
	const game = params.game as string;
	const { completedSet, toggle } = useCompleted(game, "mapMarkers");

	const { locationData, selectedLocation, markers: markersData, loading, bounds } = useGameMapData(game, locale, filters.mapLocation);
	useLocationSync({
		locationData,
		selectedLocationUuid: selectedLocation?.uuid,
		mapLocation: filters.mapLocation,
		setFilters
	});

	const markers = useMemo(
		() =>
			markersData.map((m) => ({
				...m,
				completed: completedSet.has(m.uuid)
			})),
		[markersData, completedSet]
	);

	const visibleMarkers = useVisibleMarkers({
		markers,
		filters,
		questMarker
	});

	useMarkerGroups({
		markers,
		loading,
		setFilters
	});

	const center = useMapCenter({
		visibleMarkers,
		bounds
	});

	if (!selectedLocation || !bounds) {
		return null;
	}

	const mapName = getMapName(selectedLocation.name);

	return (
		<div className={styles.map.container()}>
			<MapContainer
				key={bounds[0][0] + bounds[1][1]}
				center={center}
				zoomControl={false}
				maxBounds={bounds}
				attributionControl={false}
				maxBoundsViscosity={1}
				minZoom={2}
				maxZoom={6}
				zoom={bigZoom ? 3 : 2}
				className={styles.map.map()}
			>
				<MapResizeObserver />
				<TileLayer tms={true} url={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${game}/maps/${mapName}/{z}/{x}/{y}.png`} tileSize={256} noWrap />

				{visibleMarkers.map((m) => {
					const { title, iconUrl } = getMarkerDisplay(m);

					const isQuestMarker = !!questMarker;

					return (
						<MapMarker
							uuid={m.uuid}
							key={m.uuid}
							title={title}
							questMarker={questMarker}
							position={[m.lat, m.lng]}
							iconUrl={iconUrl}
							onClick={isQuestMarker ? undefined : () => setSelectedMarker(m)}
							onToggle={() => toggle(m.uuid)}
						/>
					);
				})}
				<MapClickHandler onClick={() => setSelectedMarker(null)} />
			</MapContainer>

			{selectedMarker && (
				<MapInfo
					icon={selectedMarker.quest?.quest_type.icon ?? selectedMarker.map_icon.icon}
					selectedQuest={!!selectedMarker.quest}
					title={selectedMarker.quest?.title ?? selectedMarker.map_icon.title}
					uuid={selectedMarker.quest?.uuid}
				/>
			)}
		</div>
	);
}
