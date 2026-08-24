"use client";

import MapClickHandler from "@/app/components/map/MapClickHandler";
import MapInfo from "@/app/components/map/modal/MapInfo";
import MapMarker from "@/app/components/map/MapMarker";
import MapResizeObserver from "@/app/components/map/MapResizeObserver";
import { useCompleted } from "@/app/context/CompletedContext";
import { useFilters } from "@/app/context/FiltersContext";
import { useClearParams } from "@/app/hooks/map/useClearParams";
import { useGameMapData } from "@/app/hooks/map/useGameMapData";
import { useLocationSync } from "@/app/hooks/map/useLocationSync";
import { useMapCenter } from "@/app/hooks/map/useMapCenter";
import { useVisibleMarkers } from "@/app/hooks/map/useVisibleMarkers";
import { getTheme } from "@/app/lib/utils/getTheme";
import { getMapName } from "@/app/lib/utils/map/getMapName";
import { getMarkerDisplay } from "@/app/lib/utils/map/getMarkerDisplay";
import "leaflet/dist/leaflet.css";
import { LatLngBounds, LatLngTuple } from "leaflet";
import { useLocale } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useLeafletTileFix } from "@/app/hooks/map/useLeafletTileFix";

export type MarkerGroup = {
	title: string;
	icon: string;
	count: number;
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
	hidden?: boolean;
	location?: {
		uuid: string;
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
	questMarkers?: MapMarkerType[];
	game: string;
};

export const SINGLE_QUEST_MARKER_ZOOM = 4;

function QuestMarkersFocus({ questMarkers }: { questMarkers?: MapMarkerType[] }) {
	const map = useMap();

	useEffect(() => {
		if (!questMarkers || questMarkers.length === 0) {
			return;
		}

		if (questMarkers.length === 1) {
			map.setView([questMarkers[0].lat, questMarkers[0].lng], SINGLE_QUEST_MARKER_ZOOM);
			return;
		}

		const questBounds = new LatLngBounds(questMarkers.map((m) => [m.lat, m.lng] as LatLngTuple));
		map.fitBounds(questBounds, { padding: [50, 50] });
	}, [questMarkers, map]);

	return null;
}

export default function GameMap({ bigZoom = false, questMarkers, game }: Props) {
	const locale = useLocale();
	useClearParams();
	useLeafletTileFix();

	const [selectedMarker, setSelectedMarker] = useState<MapMarkerType | null>(null);
	const { filters, setFilters } = useFilters();
	const theme = getTheme("map", game);
	const { completedSet, toggle } = useCompleted(game, "mapMarkers");

	const hasQuestMarkers = !!questMarkers && questMarkers.length > 0;
	const questLocationUuid = hasQuestMarkers ? questMarkers[0]?.location?.uuid : undefined;
	const locationUuid = questLocationUuid ?? filters.mapLocation;

	const { locationData, selectedLocation, markers: markersData, bounds } = useGameMapData(game, locale, locationUuid);
	useLocationSync({
		locationData,
		selectedLocationUuid: selectedLocation?.uuid,
		mapLocation: filters.mapLocation,
		setFilters,
		enabled: !hasQuestMarkers
	});

	const markers = useMemo(
		() =>
			markersData
				.filter((m) => !m.hidden)
				.map((m) => ({
					...m,
					completed: completedSet.has(m.uuid)
				})),
		[markersData, completedSet]
	);

	const visibleMarkers = useVisibleMarkers({
		markers,
		filters,
		questMarkers
	});

	const defaultCenter = useMapCenter({
		visibleMarkers,
		bounds
	});

	const center = useMemo<LatLngTuple>(() => {
		if (questMarkers && questMarkers.length > 0) {
			if (questMarkers.length === 1) {
				return [questMarkers[0].lat, questMarkers[0].lng];
			}

			const questBounds = new LatLngBounds(questMarkers.map((m) => [m.lat, m.lng] as LatLngTuple));
			const c = questBounds.getCenter();
			return [c.lat, c.lng];
		}

		return defaultCenter;
	}, [questMarkers, defaultCenter]);

	if (!selectedLocation || !bounds) {
		return null;
	}

	const mapName = getMapName(selectedLocation.name);

	return (
		<div className={theme.map.container()}>
			<MapContainer
				key={bounds[0][0] + bounds[1][1]}
				center={center}
				zoomControl={false}
				maxBounds={bounds}
				attributionControl={false}
				maxBoundsViscosity={1}
				minZoom={2}
				maxZoom={6}
				zoom={questMarkers && questMarkers.length === 1 ? SINGLE_QUEST_MARKER_ZOOM : bigZoom ? 4 : 3}
				className={theme.map.map()}
			>
				<MapResizeObserver />
				<QuestMarkersFocus questMarkers={questMarkers} />
				<TileLayer tms={true} url={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${game}/maps/${mapName}/{z}/{x}/{y}.png`} tileSize={256} noWrap />

				{visibleMarkers.map((m) => {
					const { title, iconUrl } = getMarkerDisplay(m);

					return (
						<MapMarker
							uuid={m.uuid}
							key={m.uuid}
							title={title}
							questMarkers={questMarkers}
							position={[m.lat, m.lng]}
							iconUrl={iconUrl}
							onClick={() => setSelectedMarker(m)}
							onToggle={() => toggle(m.uuid)}
						/>
					);
				})}
				<MapClickHandler onClick={() => setSelectedMarker(null)} />
			</MapContainer>

			{selectedMarker && (
				<MapInfo
					game={game}
					icon={selectedMarker.quest?.quest_type.icon ?? selectedMarker.map_icon?.icon}
					selectedQuest={!!selectedMarker.quest}
					title={selectedMarker.quest?.title ?? selectedMarker.map_icon?.title}
					uuid={selectedMarker.quest?.uuid}
					isQuestMarker={!!questMarkers}
				/>
			)}
		</div>
	);
}
