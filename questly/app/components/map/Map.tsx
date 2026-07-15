"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Rectangle, TileLayer, useMap } from "react-leaflet";

const bounds: L.LatLngBoundsExpression = [
	[-85.05, -180],
	[79.3, 135]
];

function DisableDragOnMinZoom() {
	const map = useMap();

	useEffect(() => {
		const update = () => {
			if (map.getZoom() === map.getMinZoom()) {
				map.dragging.disable();
			} else {
				map.dragging.enable();
			}
		};

		update();
		map.on("zoomend", update);

		return () => {
			map.off("zoomend", update);
		};
	}, [map]);

	return null;
}

export default function Map() {
	return (
		<MapContainer
			center={[-35, -10]}
			zoomControl={false}
			maxBounds={bounds}
			attributionControl={false}
			maxBoundsViscosity={1}
			minZoom={2}
			maxZoom={6}
			zoom={3}
			className='h-full z-3! bg-transparent!  w-full'
		>
			<TileLayer tms={true} url='/assets/maps/skellige/{z}/{x}/{y}.png' tileSize={256} noWrap />
			<DisableDragOnMinZoom />
			<Rectangle
				bounds={bounds}
				pathOptions={{
					color: "black",
					weight: 2,
					fill: false
				}}
			/>
		</MapContainer>
	);
}
