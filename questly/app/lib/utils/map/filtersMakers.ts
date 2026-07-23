import { CompletedMarkersOption, Filters } from "@/app/components/filters/types";
import { MapMarkerType } from "@/app/components/map/GameMap";

type Props = {
	markers: (MapMarkerType & { completed: boolean })[];
	filters: Filters;
	questMarker?: string;
};

export function filterMarkers({ markers, filters, questMarker }: Props) {
	if (questMarker) {
		return markers.filter((marker) => marker.quest?.uuid === questMarker);
	}

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
