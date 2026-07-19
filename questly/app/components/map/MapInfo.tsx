import FixedImage from "@/app/components/common/FixedImage";
import MapInfoButton from "@/app/components/map/MapInfoButton";
import MapQuestModal from "@/app/components/map/MapQuestModal";
import { mapVariants } from "@/app/components/map/variant/mapVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type MapInfoProps = {
	selectedQuest: boolean;
	title: string;
	uuid?: string;
	icon: string;
};

export default function MapInfo({ selectedQuest, title, uuid, icon }: MapInfoProps) {
	const styles = useGameStyles(mapVariants);
	return (
		<div className={styles.info.container()}>
			<FixedImage className={styles.info.icon()} src={icon} alt='ikon' />
			<span className={styles.info.title()}>{title}</span>

			{selectedQuest && uuid && <MapQuestModal uuid={uuid} trigger={<MapInfoButton />} />}
		</div>
	);
}
