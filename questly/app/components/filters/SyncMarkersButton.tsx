import { GetMapMarkersResponse } from "@/app/components/map/GameMap";
import { useCompleted } from "@/app/context/CompletedContext";
import { GET_MAP_MARKERS } from "@/app/lib/queries";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useQuery } from "@apollo/client/react";
import { MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
	selectedLocation: string;
	game: string;
};

export default function SyncMarkersButton({ selectedLocation, game }: Props) {
	const { data } = useQuery<GetMapMarkersResponse>(GET_MAP_MARKERS, {
		variables: { location: selectedLocation, locale: "en" }
	});

	const t = useTranslations("filters");
	const theme = getTheme("filter", game);
	const { syncMapMarkersWithQuests } = useCompleted(game, "mapMarkers");

	return (
		<button
			disabled={!data}
			className={theme.button()}
			onClick={() => {
				if (!data?.mapMarkers) return;

				syncMapMarkersWithQuests(
					data.mapMarkers.map((m) => ({
						uuid: m.uuid,
						questUuid: m.quest?.uuid ?? null
					}))
				);
			}}
		>
			<MousePointerClick size={18} />
			{t("syncQuests")}
		</button>
	);
}
