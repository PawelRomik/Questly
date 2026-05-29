import { Quest } from "@/app/types/quest";
import { ModalCharacter } from "@/app/components/quest-modal/parts/ModalCharacter";
import { ModalMap } from "@/app/components/quest-modal/parts/ModalMap";
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

type Props = {
	quest: Quest;
};

export function QuestModalLayout({ quest }: Props) {
	const styles = useGameStyles(questModalVariants);

	return (
		<div className={styles.base()}>
			<ModalCharacter src={quest.character?.image?.url || default_character} />

			<ModalMap src={quest.location?.minimap?.url || default_map} />

			<ModalHeader quest={quest} />

			<ModalDescription desc={quest.description} />

			<ModalRequirements requirements={quest.requirement} />

			<ModalRewards rewards={quest.rewards} />

			<ModalFooter uuid={quest.uuid} />

			<ModalCloseButton />
		</div>
	);
}
