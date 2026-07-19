import { Quest } from "@/app/types/quest";
import { ModalCharacter } from "@/app/components/quest-modal/parts/ModalCharacter";
import { ModalMap } from "@/app/components/quest-modal/parts/map/ModalMap";
import { ModalRewards } from "@/app/components/quest-modal/parts/rewards/ModalRewards";
import { ModalHeader } from "@/app/components/quest-modal/parts/ModalHeader";
import { ModalFooter } from "@/app/components/quest-modal/parts/ModalFooter";
import { ModalCloseButton } from "@/app/components/quest-modal/ModalCloseButton";
import { ModalDescription } from "@/app/components/quest-modal/parts/ModalDescription";
import { ModalRequirements } from "@/app/components/quest-modal/parts/requirements/ModalRequirements";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import default_character from "../../../public/assets/chh.png";
import default_map from "../../../public/assets/map.png";
import { useState } from "react";
import ModalMapContainer from "@/app/components/quest-modal/parts/map/ModalMapContainer";

type Props = {
	quest: Quest;
	hideMap?: boolean;
};

export function QuestModalLayout({ quest, hideMap = false }: Props) {
	const [mapStateVisible, setMapStateVisible] = useState(false);
	const styles = useGameStyles(questModalVariants);
	return (
		<div className={styles.base(mapStateVisible)}>
			{!mapStateVisible ? (
				<>
					<ModalCharacter src={quest.character?.image?.url || default_character} />

					{!hideMap && <ModalMap src={quest.location?.minimap?.url || default_map} setMapStateVisible={setMapStateVisible} />}

					<ModalHeader quest={quest} />

					<ModalDescription desc={quest.description} />

					<ModalRequirements requirements={quest.requirement} />

					<ModalRewards hideMap={hideMap} rewards={quest.rewards} />

					<ModalFooter uuid={quest.uuid} />

					<ModalCloseButton />
				</>
			) : (
				<ModalMapContainer uuid={quest.uuid} setMapStateVisible={setMapStateVisible} />
			)}
		</div>
	);
}
