"use client";

import { useCompleted } from "@/app/context/CompletedContext";
import L from "leaflet";
import { Marker } from "react-leaflet";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { MapMarkerType } from "@/app/components/map/GameMap";

type MapMarkerProps = {
	uuid: string;
	position: [number, number];
	iconUrl: string;
	iconSize?: [number, number];
	onClick?: (title: string) => void;
	onToggle?: () => void;
	title: string;
	questMarkers?: MapMarkerType[];
};

export default function MapMarker({ uuid, title, position, iconUrl, onToggle, iconSize = [32, 32], onClick, questMarkers }: MapMarkerProps) {
	const params = useParams();
	const game = params.game as string;
	const { isCompleted } = useCompleted(game, "mapMarkers");

	const completed = isCompleted(uuid);

	const opacity = questMarkers ? 1 : completed ? 0.5 : 1;

	const icon = useMemo(
		() =>
			L.icon({
				iconUrl,
				iconSize,
				iconAnchor: [iconSize[0] / 2, iconSize[1]]
			}),
		[iconUrl, iconSize]
	);

	return (
		<Marker
			position={position}
			icon={icon}
			opacity={opacity}
			eventHandlers={{
				click: (e) => {
					e.originalEvent.stopPropagation();
					onClick?.(title);
				},
				contextmenu: (e) => {
					e.originalEvent.preventDefault();

					onToggle?.();
				}
			}}
		/>
	);
}
