import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { GetMapMarkersResponse } from "@/app/components/map/GameMap";
import { useCompleted } from "@/app/context/CompletedContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { GET_MAP_MARKERS } from "@/app/lib/queries";
import { useQuery } from "@apollo/client/react";
import { MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function SyncMarkersButton({ selectedLocation }: { selectedLocation: string }) {
	const { data } = useQuery<GetMapMarkersResponse>(GET_MAP_MARKERS, {
		variables: { location: selectedLocation, locale: "en" }
	});

	const styles = useGameStyles(filterVariants);
	const t = useTranslations("filters");
	const params = useParams();
	const game = params.game as string;
	const { syncMapMarkersWithQuests } = useCompleted(game, "mapMarkers");

	return (
		<button
			disabled={!data}
			className={styles.button()}
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
