import { GameMapContainer } from "@/app/components/map";
import ModalMapCloseButton from "@/app/components/quest-modal/parts/map/ModalMapCloseButton";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	uuid: string;
	setMapStateVisible: (val: boolean) => void;
};

export default function ModalMapContainer({ uuid, setMapStateVisible }: Props) {
	const styles = useGameStyles(questModalVariants);

	return (
		<div className={styles.map.modal()}>
			<ModalMapCloseButton setMapStateVisible={setMapStateVisible} />
			<GameMapContainer bigZoom questMarker={uuid} />
		</div>
	);
}
