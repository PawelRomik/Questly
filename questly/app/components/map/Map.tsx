"use client";

import MapClickHandler from "@/app/components/map/MapClickHandler";
import MapInfo from "@/app/components/map/MapInfo";
import MapMarker from "@/app/components/map/MapMarker";
import { useCompleted } from "@/app/context/CompletedContext";
import { GET_MAP_MARKERS } from "@/app/lib/queries";
import DisableDragOnMinZoom from "@/app/lib/utils/disableDragOnMinZoom";
import { useQuery } from "@apollo/client/react";
import "leaflet/dist/leaflet.css";
import { useMemo, useState } from "react";
import { MapContainer, Rectangle, TileLayer } from "react-leaflet";

const bounds: L.LatLngBoundsExpression = [
	[-85.05, -180],
	[79.3, 135]
];

type MapMarker = {
	id: number;
	lat: number;
	lng: number;
	map_icon: {
		title: string;
		icon: {
			url: string;
		};
	};
	quest: {
		uuid: string;
		title: string;
		quest_type: {
			icon: {
				url: string;
			};
		};
	} | null;
};

type GetMapMarkersResponse = {
	mapMarkers: MapMarker[];
};

type Props = {
	bigZoom?: boolean;
	questMarker?: string;
};

export default function Map({ bigZoom = false, questMarker }: Props) {
	const { data } = useQuery<GetMapMarkersResponse>(GET_MAP_MARKERS, {
		variables: { location: "Skellige" },
		fetchPolicy: "cache-first",
		nextFetchPolicy: "cache-first"
	});

	const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
	const { completedSet } = useCompleted("witcher3", "quests");
	const markers = useMemo(
		() =>
			(data?.mapMarkers ?? []).map((m) => ({
				...m,
				completed: !!m.quest && completedSet.has(m.quest.uuid)
			})),
		[data?.mapMarkers, completedSet]
	);

	const visibleMarkers = useMemo(() => {
		if (!questMarker) return markers;

		return markers.filter((m) => m.quest?.uuid === questMarker);
	}, [markers, questMarker]);

	console.log(markers);

	const center = useMemo<[number, number]>(() => {
		if (visibleMarkers.length === 1) {
			return [visibleMarkers[0].lat, visibleMarkers[0].lng];
		}

		return [-35, -10];
	}, [visibleMarkers]);

	return (
		<div className='relative h-full w-full'>
			<MapContainer
				center={center}
				zoomControl={false}
				maxBounds={bounds}
				attributionControl={false}
				maxBoundsViscosity={1}
				minZoom={bigZoom ? 3 : 2}
				maxZoom={6}
				zoom={bigZoom ? 4 : 3}
				className='h-full z-3! bg-transparent!  w-full'
			>
				<TileLayer tms={true} url='/assets/maps/skellige/{z}/{x}/{y}.png' tileSize={256} noWrap />
				{!bigZoom && <DisableDragOnMinZoom />}
				<Rectangle
					bounds={bounds}
					pathOptions={{
						color: "black",
						weight: 2,
						fill: false
					}}
				/>
				{visibleMarkers.map((m) => {
					const hasQuest = !!m.quest;

					const title = hasQuest ? m.quest?.title || "" : m.map_icon?.title || "";

					const iconUrl = hasQuest ? `http://localhost:1337${m.quest?.quest_type.icon.url ?? ""}` : `http://localhost:1337${m.map_icon.icon.url}`;

					const isQuestMarker = !!questMarker;

					return (
						<MapMarker
							completed={m.completed}
							key={m.id}
							title={title}
							questMarker={questMarker}
							position={[m.lat, m.lng]}
							iconUrl={iconUrl}
							onClick={isQuestMarker ? undefined : () => setSelectedMarker(m)}
						/>
					);
				})}
				<MapClickHandler onClick={() => setSelectedMarker(null)} />
			</MapContainer>

			{selectedMarker && <MapInfo selectedQuest={!!selectedMarker.quest} title={selectedMarker.quest?.title ?? selectedMarker.map_icon.title} uuid={selectedMarker.quest?.uuid} />}
		</div>
	);
}
