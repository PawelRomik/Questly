"use client";

import { useMapEvents } from "react-leaflet";

type Props = {
	onClick: () => void;
};

export default function MapClickHandler({ onClick }: Props) {
	useMapEvents({
		click: () => {
			onClick();
		}
	});

	return null;
}
