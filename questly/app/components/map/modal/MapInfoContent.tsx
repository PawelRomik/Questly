import { useLocalizedItem } from "@/app/hooks/useLocalizedItem";
import { GET_MAP_MARKER_BY_UUID } from "@/app/lib/queries";

import { getTheme } from "@/app/lib/utils/getTheme";
import default_marker from "@/public/assets/marker.png";
import { useLocale } from "next-intl";

import FixedImage from "@/app/components/common/FixedImage";
import MapInfoButton from "@/app/components/map/modal/MapInfoButton";
import MapQuestModal from "@/app/components/map/modal/MapQuestModal";
import { MapInfoProps } from "@/app/components/map/modal/MapInfo";

type MarkerDetails = {
	uuid: string;
	description?: string | null;
	image?: string | null;
};

type GetMapMarkerByUuidResponse = {
	mapMarkers: MarkerDetails[];
};

export default function MapInfoContent({ selectedQuest, title, uuid, markerUuid, icon, game, isQuestMarker }: MapInfoProps) {
	const theme = getTheme("map", game);
	const locale = useLocale();

	const marker = useLocalizedItem<MarkerDetails, { uuid: string }>({
		locale,
		query: GET_MAP_MARKER_BY_UUID,
		vars: { uuid: markerUuid },
		getItems: (data: GetMapMarkerByUuidResponse) => data?.mapMarkers ?? []
	});

	const hasQuestButton = selectedQuest && !!uuid && !isQuestMarker;
	const hasExtra = !!(marker?.image || marker?.description);

	const questButton = hasQuestButton ? <MapQuestModal game={game} initialUuid={uuid!} trigger={<MapInfoButton game={game} />} /> : null;

	if (!hasExtra) {
		return (
			<div className={theme.info.container("row")}>
				<FixedImage className={theme.info.icon()} src={icon ?? default_marker} alt='ikon' />

				<span className={theme.info.title()}>{title ?? "Marker"}</span>

				{questButton}
			</div>
		);
	}

	return (
		<div className={theme.info.container("col")}>
			<div className='flex'>
				<FixedImage className={theme.info.icon()} src={icon ?? default_marker} alt='ikon' />

				<span className={theme.info.title()}>{title ?? "Marker"}</span>
			</div>

			<FixedImage className={theme.info.image()} src={marker.image ?? ""} alt={title ?? "Marker"} />

			<div className={theme.info.desc()}>{marker.description}</div>

			{questButton}
		</div>
	);
}
