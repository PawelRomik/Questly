import { GameMapContainer } from "@/app/components/map";
import ModalMapCloseButton from "@/app/components/quest-modal/parts/map/ModalMapCloseButton";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	uuid: string;
	setMapStateVisible: (val: boolean) => void;
	game: string;
};

export default function ModalMapContainer({ uuid, setMapStateVisible, game }: Props) {
	const theme = getTheme("questModal", game);

	return (
		<div className={theme.map.modal()}>
			<ModalMapCloseButton game={game} setMapStateVisible={setMapStateVisible} />
			<GameMapContainer game={game} bigZoom questMarker={uuid} />
		</div>
	);
}
