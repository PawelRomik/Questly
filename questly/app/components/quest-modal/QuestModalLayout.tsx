import { Quest } from "@/app/types/quest";
import { ModalCharacter } from "@/app/components/quest-modal/parts/ModalCharacter";
import { ModalMap } from "@/app/components/quest-modal/parts/ModalMap";
import { ModalRewards } from "@/app/components/quest-modal/parts/ModalRewards";
import { ModalHeader } from "@/app/components/quest-modal/parts/ModalHeader";
import { ModalFooter } from "@/app/components/quest-modal/parts/ModalFooter";
import { ModalCloseButton } from "@/app/components/quest-modal/ModalCloseButton";
import { ModalDescription } from "@/app/components/quest-modal/parts/ModalDescription";
import { ModalRequirements } from "@/app/components/quest-modal/parts/ModalRequirements";

type Props = {
	quest: Quest;
};

export function QuestModalLayout({ quest }: Props) {
	return (
		<div className='fixed left-1/2 top-1/2 z-40 w-250 min-h-150 -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] border-4 border-[rgb(40,37,28)] shadow-[0_0_40px_rgba(0,0,0,0.9)] text-gray-200 overflow-hidden grid grid-cols-[220px_2fr_1fr] grid-rows-[auto_auto_1fr_100px_70px]'>
			{/* CHARACTER */}
			<div className='row-[1/4] col-1 border-r-3 border-b-3 border-[rgb(40,37,28)]'>
				<ModalCharacter src={quest.character?.image.url || ""} />
			</div>

			{/* MAP */}
			<div className='row-4 col-1 bg-black/20 border-[rgb(40,37,28)] border-b-3'>
				<ModalMap src={quest.location.minimap.url} />
			</div>

			{/* HEADER */}
			<ModalHeader quest={quest} />

			{/* DESC */}
			<ModalDescription desc={quest.description} />

			{/* REQUIREMENTS */}

			<ModalRequirements requirements={quest.requirement} />

			{/* REWARDS */}

			<ModalRewards rewards={quest.rewards} />

			{/* FOOTER */}
			<ModalFooter uuid={quest.uuid} />

			<ModalCloseButton />
		</div>
	);
}
