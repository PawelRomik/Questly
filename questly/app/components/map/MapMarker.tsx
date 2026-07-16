"use client";

import L from "leaflet";
import { Marker } from "react-leaflet";
import { useMemo, useState } from "react";

type MapMarkerProps = {
	position: [number, number];
	iconUrl: string;
	iconSize?: [number, number];
	completed?: boolean;
	onClick?: (title: string) => void;
	title: string;
};

export default function MapMarker({ title, position, iconUrl, iconSize = [32, 32], onClick, completed }: MapMarkerProps) {
	const [manualOpacity, setManualOpacity] = useState<number | null>(null);

	const opacity = manualOpacity ?? (completed ? 0.5 : 1);

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

					setManualOpacity((prev) => {
						const current = prev ?? (completed ? 0.5 : 1);
						return current === 1 ? 0.5 : 1;
					});
				}
			}}
		/>
	);
}
