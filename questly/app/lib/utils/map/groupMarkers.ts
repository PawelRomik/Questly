import { MapMarkerType, MarkerGroup } from "@/app/components/map/GameMap";

export function groupMarkers(markers: MapMarkerType[]): MarkerGroup[] {
	const grouped = new Map<string, MarkerGroup>();

	markers.forEach((marker) => {
		const title = marker.quest ? marker.quest.quest_type.name : marker.map_icon?.title;
		const icon = marker.quest ? marker.quest.quest_type.icon : marker.map_icon?.icon;

		if (!title || !icon) return;

		if (!grouped.has(title)) {
			grouped.set(title, {
				title,
				icon,
				count: 1,
				visible: true,
				isQuest: !!marker.quest,
				uuids: [marker.uuid]
			});
		} else {
			const group = grouped.get(title)!;
			group.count++;
			group.uuids.push(marker.uuid);
		}
	});

	return [...grouped.values()].sort((a, b) => {
		if (a.isQuest !== b.isQuest) {
			return a.isQuest ? -1 : 1;
		}

		return a.title.localeCompare(b.title);
	});
}
