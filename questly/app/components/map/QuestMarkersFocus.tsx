import { MapMarkerType, SINGLE_QUEST_MARKER_ZOOM } from "@/app/components/map/GameMap";
import { LatLngBounds, LatLngTuple } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function QuestMarkersFocus({ questMarkers }: { questMarkers?: MapMarkerType[] }) {
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
