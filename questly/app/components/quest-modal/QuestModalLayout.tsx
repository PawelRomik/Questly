import { Quest } from "@/app/types/quest";
import { ModalCharacter } from "@/app/components/quest-modal/parts/ModalCharacter";
import { ModalMap } from "@/app/components/quest-modal/parts/map/ModalMap";
import { ModalHeader } from "@/app/components/quest-modal/parts/ModalHeader";
import { ModalFooter } from "@/app/components/quest-modal/parts/ModalFooter";
import { ModalCloseButton } from "@/app/components/quest-modal/ModalCloseButton";
import { ModalDescription } from "@/app/components/quest-modal/parts/ModalDescription";
import { ModalRequirementsContainer } from "@/app/components/quest-modal/parts/requirements/ModalRequirementsContainer";
import default_character from "../../../public/assets/chh.png";
import default_map from "../../../public/assets/map.png";
import { useState } from "react";
import ModalMapContainer from "@/app/components/quest-modal/parts/map/ModalMapContainer";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	quest: Quest;
	hideMap?: boolean;
	game: string;
};

export function QuestModalLayout({ quest, hideMap = false, game }: Props) {
	const [mapStateVisible, setMapStateVisible] = useState(false);
	const mapVisible = hideMap === true || !quest.map_marker;
	const theme = getTheme("questModal", game);
	return (
		<div className={theme.base(mapStateVisible)}>
			{!mapStateVisible ? (
				<>
					<ModalCharacter showMap={mapVisible} game={game} src={quest.character?.image || default_character} />

					{!mapVisible && <ModalMap game={game} src={quest.location?.minimap || default_map} setMapStateVisible={setMapStateVisible} />}

					<ModalHeader game={game} quest={quest} />

					<ModalDescription game={game} desc={quest.description} />

					<ModalRequirementsContainer game={game} prev_quests={quest.prev_quests} next_quests={quest.next_quests} requirements={quest.requirement} />

					<ModalFooter quest={quest} game={game} uuid={quest.uuid} />

					<ModalCloseButton game={game} />
				</>
			) : (
				<ModalMapContainer game={game} mapMarker={quest.map_marker} setMapStateVisible={setMapStateVisible} />
			)}
		</div>
	);
}
