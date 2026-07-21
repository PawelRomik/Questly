"use client";

import { CompletedMarkersOption } from "@/app/components/filters/types";
import MapClickHandler from "@/app/components/map/MapClickHandler";
import MapInfo from "@/app/components/map/MapInfo";
import MapMarker from "@/app/components/map/MapMarker";
import MapResizeObserver from "@/app/components/map/MapResizeObserver";
import { mapVariants } from "@/app/components/map/variant/mapVariants";
import { useCompleted } from "@/app/context/CompletedContext";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useLocalizedMarkersList } from "@/app/hooks/useLocalizedMarkersList";
import { GET_MAP_MARKERS } from "@/app/lib/queries";
import "leaflet/dist/leaflet.css";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const bounds: L.LatLngBoundsExpression = [
	[-85.05, -180],
	[79.3, 135]
];

type MapMarkerType = {
	id: number;
	lat: number;
	lng: number;
	uuid: string;
	map_icon: {
		title: string;
		uuid: string;
		icon: {
			url: string;
		};
	};
	quest: {
		uuid: string;
		title: string;
		quest_type: {
			uuid: string;
			icon: {
				url: string;
			};
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

type markerGroup = {
	title: string;
	icon: string;
	count: number;
	visible: boolean;
	isQuest: boolean;
	uuids: string[];
};

export default function GameMap({ bigZoom = false, questMarker }: Props) {
	const locale = useLocale();

	const styles = useGameStyles(mapVariants);
	const [selectedMarker, setSelectedMarker] = useState<MapMarkerType | null>(null);
	const { filters, setFilters } = useFilters();
	const params = useParams();
	const game = params.game as string;
	const { completedSet, toggle } = useCompleted(game, "mapMarkers");
	const { markers: markersData, loading } = useLocalizedMarkersList<MapMarkerType, { location: string }>({
		locale,
		query: GET_MAP_MARKERS,
		vars: {
			location: "Skellige"
		},
		getItems: (data) => data?.mapMarkers ?? []
	});

	const markers = useMemo(
		() =>
			markersData.map((m) => ({
				...m,
				completed: completedSet.has(m.uuid)
			})),
		[markersData, completedSet]
	);

	const visibleMarkers = useMemo(() => {
		if (questMarker) {
			return markers.filter((m) => m.quest?.uuid === questMarker);
		}

		const hidden = new Set(filters.mapMarkers.filter((m) => !m.visible).map((m) => m.title));

		return markers.filter((marker) => {
			if (filters.completedMarkers === CompletedMarkersOption.HIDE && marker.completed) {
				return false;
			}

			const type = marker.quest ? marker.quest.quest_type.name : marker.map_icon?.title;

			if (!type) return true;

			return !hidden.has(type);
		});
	}, [markers, questMarker, filters.mapMarkers, filters.completedMarkers]);

	useEffect(() => {
		if (loading || !markers.length) return;

		setFilters((prev) => {
			if (prev.mapMarkers.length) return prev;

			const grouped = new Map<string, markerGroup>();

			markers.forEach((marker) => {
				const title = marker.quest ? marker.quest.quest_type.name : marker.map_icon?.title;

				const icon = marker.quest ? marker.quest.quest_type.icon.url : marker.map_icon?.icon.url;

				if (!title || !icon) return;

				if (!grouped.has(title)) {
					grouped.set(title, {
						title,
						icon,
						count: 1,
						visible: true,
						isQuest: !!marker.quest,
						uuids: [marker.uuid]
					});
				} else {
					const group = grouped.get(title)!;
					group.count++;
					group.uuids.push(marker.uuid);
				}
			});

			return {
				...prev,
				mapMarkers: [...grouped.values()].sort((a, b) => {
					if (a.isQuest !== b.isQuest) {
						return a.isQuest ? -1 : 1;
					}

					return a.title.localeCompare(b.title);
				})
			};
		});
	}, [markers, loading, setFilters]);

	const center = useMemo<[number, number]>(() => {
		if (visibleMarkers.length === 1) {
			return [visibleMarkers[0].lat, visibleMarkers[0].lng];
		}

		return [-35, -10];
	}, [visibleMarkers]);

	return (
		<div className={styles.map.container()}>
			<MapContainer
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
				<TileLayer tms={true} url='/assets/maps/skellige/{z}/{x}/{y}.png' tileSize={256} noWrap />

				{visibleMarkers.map((m) => {
					const hasQuest = !!m.quest;

					const title = hasQuest ? m.quest?.title || "" : m.map_icon?.title || "";

					const iconUrl = hasQuest ? `http://localhost:1337${m.quest?.quest_type.icon.url ?? ""}` : `http://localhost:1337${m.map_icon.icon.url}`;

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
					icon={selectedMarker.quest?.quest_type.icon.url ?? selectedMarker.map_icon.icon.url}
					selectedQuest={!!selectedMarker.quest}
					title={selectedMarker.quest?.title ?? selectedMarker.map_icon.title}
					uuid={selectedMarker.quest?.uuid}
				/>
			)}
		</div>
	);
}
