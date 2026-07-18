import { GetMapMarkersResponse } from "@/app/components/map/GameMap";
import { useCompleted } from "@/app/context/CompletedContext";
import { GET_MAP_MARKERS } from "@/app/lib/queries";
import { useQuery } from "@apollo/client/react";

export default function SyncMarkersButton() {
	const { data } = useQuery<GetMapMarkersResponse>(GET_MAP_MARKERS, {
		variables: { location: "Skellige" }
	});

	const { syncMapMarkersWithQuests } = useCompleted("witcher3", "mapMarkers");

	return (
		<button
			disabled={!data}
			onClick={() => {
				if (!data) return;

				syncMapMarkersWithQuests(
					data.mapMarkers.map((m) => ({
						uuid: m.uuid,
						questUuid: m.quest?.uuid ?? null
					}))
				);
			}}
		>
			Sync with quests
		</button>
	);
}
