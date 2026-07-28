import { MapMarkerType } from "@/app/components/map/GameMap";
import default_marker from "../../../../public/assets/marker.png";

export function getMarkerDisplay(marker: MapMarkerType) {
	const isQuest = !!marker.quest;

	const icon = isQuest ? marker.quest?.quest_type.icon : marker.map_icon?.icon;

	return {
		isQuest,
		title: isQuest ? (marker.quest?.title ?? "") : (marker.map_icon?.title ?? ""),
		icon: icon ?? "",
		iconUrl: icon ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${icon}` : default_marker.src
	};
}
