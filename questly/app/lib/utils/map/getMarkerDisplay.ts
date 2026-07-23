import { MapMarkerType } from "@/app/components/map/GameMap";

export function getMarkerDisplay(marker: MapMarkerType) {
	const isQuest = !!marker.quest;

	return {
		isQuest,
		title: isQuest ? (marker.quest?.title ?? "") : (marker.map_icon?.title ?? ""),
		icon: isQuest ? (marker.quest?.quest_type.icon ?? "") : (marker.map_icon?.icon ?? ""),
		iconUrl: isQuest ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${marker.quest?.quest_type.icon ?? ""}` : `${process.env.NEXT_PUBLIC_STORAGE_URL}/${marker.map_icon.icon}`
	};
}
