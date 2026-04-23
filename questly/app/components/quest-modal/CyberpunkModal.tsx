"use client";

import { Dialog } from "radix-ui";
import { ModalCharacter } from "@/app/components/quest-modal/ModalCharacter";
import { ModalMeta } from "@/app/components/quest-modal/ModalMeta";
import { ModalRewards } from "@/app/components/quest-modal/ModalRewards";
import { RequirementsList } from "@/app/components/quest-modal/RequirementsList";
import { QuestButton } from "@/app/components/quest/QuestButton";
import { QuestType, Requirement, Rewards } from "@/app/types/quest";
import { ModalMap } from "@/app/components/quest-modal/ModalMap";
import Quest from "@/app/components/quest/Quest";

type Props = {
	title: string;
	type: QuestType;
	desc: string;
	tags: string[];
	rewards: Rewards;
	locationImage: string;
	mapImage: string;
	characterImage: string;
	uuid: string;
	activeQuestId: string | null;
	setActiveQuestId: (id: string | null) => void;
	isCompleted: boolean;
	toggleCompleted: () => void;
	requirements: Requirement[];
	search: string;
	searchTags: boolean;
	level: number;
	location: string;
};

export default function CyberpunkModal({
	uuid,
	setActiveQuestId,
	activeQuestId,
	title,
	type,
	desc,
	tags,
	locationImage,
	mapImage,
	location,
	characterImage,
	rewards,
	isCompleted,
	search,
	searchTags,
	level,
	toggleCompleted,
	requirements
}: Props) {
	const isOpen = activeQuestId === uuid;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<Dialog.Trigger asChild>
				<div onClick={() => setActiveQuestId(uuid)} className='w-full'>
					<Quest
						completed={isCompleted}
						onToggle={toggleCompleted}
						title={title}
						search={search}
						searchTags={searchTags}
						shortDesc={desc.slice(0, 60) + "..."}
						level={level}
						tags={tags}
						characterImage={characterImage}
						locationImage={locationImage}
					/>
				</div>
			</Dialog.Trigger>
			<Dialog.Portal>
				{/* OVERLAY */}
				<Dialog.Overlay className='fixed inset-0 bg-black/90 backdrop-blur-md' />

				{/* MODAL */}
				<Dialog.Content
					className='fixed left-1/2 top-1/2 w-225 h-130
					-translate-x-1/2 -translate-y-1/2
					bg-[#0a0a0f]
					border border-[#ff003c]/30
					shadow-[0_0_30px_rgba(255,0,60,0.4)]
					text-[#8ffcff]
					overflow-hidden
					grid grid-cols-[220px_2fr_1fr]
					grid-rows-[auto_auto_1fr_120px_70px]'
				>
					{/* SCANLINES */}
					<div className='pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,transparent_95%,rgba(255,255,255,0.1)_100%)] bg-size[100%_4px]' />

					{/* CHARACTER */}
					<div className='row-[1/4] col-1 border-r border-[#00f0ff]/20 bg-black/40'>
						<ModalCharacter src={characterImage} />
					</div>

					{/* MAP */}
					<div className='row-4 col-1 border-r border-t border-[#00f0ff]/20'>
						<ModalMap src={mapImage} />
					</div>

					{/* TITLE */}
					<div className='col-[2/4] row-1 border-b border-[#ff003c]/40 px-4 py-3 bg-[#14000a]'>
						<h2 className='text-lg font-bold tracking-widest uppercase text-[#ff3c6f]'>{title}</h2>
					</div>

					{/* TYPE */}

					{/* DESC */}
					<div className='col-2 row-3 p-4 border-r border-[#00f0ff]/20 text-sm leading-relaxed text-[#8ffcff]'>{desc}</div>

					{/* REQUIREMENTS */}
					<div className='col-3 row-[3/5] border-l border-[#ff003c]/30 p-4 bg-black/30'>
						<h3 className='text-[10px] uppercase tracking-[0.2em] text-[#ff3c6f] mb-2'>Requirements</h3>
						<RequirementsList requirements={requirements} />
					</div>

					{/* REWARDS */}
					<div className='col-2 row-4 p-4 border-t border-[#00f0ff]/20'>
						<h3 className='text-[10px] uppercase tracking-[0.2em] text-[#00f0ff] mb-2'>Rewards</h3>
						<ModalRewards rewards={rewards} />
					</div>

					{/* FOOTER */}
					<div className='col-[1/4] row-5 border-t border-[#ff003c]/30 flex items-center justify-end gap-4 px-4'>
						<QuestButton completed={isCompleted} onClick={toggleCompleted} />

						<button className='px-4 py-2 border border-[#ff003c] text-[#ff3c6f] hover:bg-[#ff003c]/10 transition uppercase tracking-widest text-xs'>next quest</button>
					</div>

					{/* CLOSE */}
					<Dialog.Close asChild>
						<button
							className='absolute top-3 right-3 w-8 h-8 flex items-center justify-center
							border border-[#00f0ff]/40 text-[#00f0ff]
							hover:bg-[#00f0ff]/10 transition'
						>
							✕
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
