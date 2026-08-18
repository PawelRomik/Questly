import { GameMapContainer } from "@/app/components/map";
import { MapMarkerType } from "@/app/components/map/GameMap";

import ModalMapCloseButton from "@/app/components/quest-modal/parts/map/ModalMapCloseButton";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	mapMarker: MapMarkerType;
	setMapStateVisible: (val: boolean) => void;
	game: string;
};

export default function ModalMapContainer({ mapMarker, setMapStateVisible, game }: Props) {
	const theme = getTheme("questModal", game);

	return (
		<div className={theme.map.modal()}>
			<ModalMapCloseButton game={game} setMapStateVisible={setMapStateVisible} />

			<GameMapContainer game={game} bigZoom questMarker={mapMarker} />
		</div>
	);
}
