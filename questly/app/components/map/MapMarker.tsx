"use client";

import { useCompleted } from "@/app/context/CompletedContext";
import L from "leaflet";
import { Marker } from "react-leaflet";
import { useMemo } from "react";

type MapMarkerProps = {
	uuid: string;
	position: [number, number];
	iconUrl: string;
	iconSize?: [number, number];
	onClick?: (title: string) => void;
	onToggle?: () => void;
	title: string;
	questMarker?: string;
};

export default function MapMarker({ uuid, title, position, iconUrl, onToggle, iconSize = [32, 32], onClick, questMarker }: MapMarkerProps) {
	const { isCompleted } = useCompleted("witcher3", "mapMarkers");

	const completed = isCompleted(uuid);

	const interactive = !questMarker;

	const opacity = questMarker ? 1 : completed ? 0.5 : 1;

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
			interactive={interactive}
			eventHandlers={
				interactive
					? {
							click: (e) => {
								e.originalEvent.stopPropagation();
								onClick?.(title);
							},
							contextmenu: (e) => {
								e.originalEvent.preventDefault();

								onToggle?.();
							}
						}
					: undefined
			}
		/>
	);
}
