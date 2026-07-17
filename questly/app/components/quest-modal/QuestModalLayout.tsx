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
import Map from "@/app/components/map/Map";
import { useState } from "react";

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
				<div className='relative h-[600px] w-[1000px]'>
					<button
						type='button'
						onClick={() => setMapStateVisible(false)}
						className='absolute right-4 top-4 z-[1000] flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black'
					>
						×
					</button>

					<Map bigZoom questMarker={quest.uuid} />
				</div>
			)}
		</div>
	);
}
