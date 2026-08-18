import { CompletedMarkersOption, Filters } from "@/app/components/filters/types";
import { MapMarkerType } from "@/app/components/map/GameMap";

type Props = {
	markers: (MapMarkerType & { completed: boolean })[];
	filters: Filters;
	questMarker?: MapMarkerType;
};

export function filterMarkers({ markers, filters, questMarker }: Props) {
	if (questMarker) return [questMarker];

	const hidden = new Set(filters.mapMarkers.filter((marker) => !marker.visible).map((marker) => marker.title));

	return markers.filter((marker) => {
		if (filters.completedMarkers === CompletedMarkersOption.HIDE && marker.completed) {
			return false;
		}

		const type = marker.quest ? marker.quest.quest_type.name : marker.map_icon?.title;

		if (!type) {
			return true;
		}

		return !hidden.has(type);
	});
}
