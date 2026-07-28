import FixedImage from "@/app/components/common/FixedImage";
import MapInfoButton from "@/app/components/map/MapInfoButton";
import MapQuestModal from "@/app/components/map/MapQuestModal";
import { getTheme } from "@/app/lib/utils/getTheme";

type MapInfoProps = {
	selectedQuest: boolean;
	title: string;
	uuid?: string;
	icon: string;
	game: string;
};

export default function MapInfo({ selectedQuest, title, uuid, icon, game }: MapInfoProps) {
	const theme = getTheme("map", game);
	return (
		<div className={theme.info.container()}>
			<FixedImage className={theme.info.icon()} src={icon} alt='ikon' />
			<span className={theme.info.title()}>{title}</span>

			{selectedQuest && uuid && <MapQuestModal game={game} uuid={uuid} trigger={<MapInfoButton game={game} />} />}
		</div>
	);
}
