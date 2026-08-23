"use client";

import { ModalCharacter } from "@/app/components/quest-modal/parts/ModalCharacter";
import { ModalMap } from "@/app/components/quest-modal/parts/map/ModalMap";
import { ModalHeader } from "@/app/components/quest-modal/parts/ModalHeader";
import { ModalFooter } from "@/app/components/quest-modal/parts/ModalFooter";
import { ModalCloseButton } from "@/app/components/quest-modal/ModalCloseButton";
import { ModalDescription } from "@/app/components/quest-modal/parts/ModalDescription";
import { ModalRequirementsContainer } from "@/app/components/quest-modal/parts/requirements/ModalRequirementsContainer";
import default_character from "../../../public/assets/chh.png";
import default_map from "../../../public/assets/map.png";
import { useEffect, useMemo, useState } from "react";
import ModalMapContainer from "@/app/components/quest-modal/parts/map/ModalMapContainer";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useApollo } from "@/app/hooks/useApollo";
import { GET_QUEST_BY_UUID } from "@/app/lib/queries";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Quest } from "@/app/types/quest";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";

type Props = {
	hideMap?: boolean;
	game: string;
};

type GetQuestByUuidResponse = {
	quests: Quest[];
};

type getQuestVars = {
	locale: string;
	uuid: string;
};

export function QuestModalLayout({ hideMap = false, game }: Props) {
	const [mapStateVisible, setMapStateVisible] = useState(false);
	const locale = useLocale();
	const searchParams = useSearchParams();
	const uuid = searchParams.get("activeQuest") || "";
	const { setActiveQuestId } = useActiveQuest();

	const { data: questData } = useApollo<GetQuestByUuidResponse, getQuestVars>(GET_QUEST_BY_UUID, {
		locale,
		uuid
	});

	const quest = useMemo(() => questData?.quests?.[0], [questData]);

	useEffect(() => {
		if (uuid && !quest) {
			setActiveQuestId(null);
		}
	}, [uuid, quest, setActiveQuestId]);

	if (!uuid || !quest) return null;

	const mapVisible = hideMap === true || !(quest.map_markers?.length >= 1);

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
				<ModalMapContainer game={game} mapMarkers={quest.map_markers} setMapStateVisible={setMapStateVisible} />
			)}
		</div>
	);
}
