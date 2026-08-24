import { CompletedMarkersOption, Filters } from "@/app/components/filters/types";
import { MapMarkerType } from "@/app/components/map/GameMap";

type Props = {
	markers: (MapMarkerType & { completed: boolean })[];
	filters: Filters;
	questMarkers?: MapMarkerType[];
};

export function filterMarkers({ markers, filters, questMarkers }: Props) {
	if (questMarkers) return [...questMarkers];

	const hidden = new Set(filters.disabledMarkers);

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
