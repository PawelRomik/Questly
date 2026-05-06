"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { useFilters } from "@/app/context/FiltersContext";

import WitcherQuest from "@/app/components/quest/witcher3/WitcherQuest";

import { Quest } from "@/app/types/quest";
import { QuestModalLayout } from "@/app/components/quest-modal/QuestModalLayout";

type Props = {
	quest: Quest;
};

export default function QuestModal({ quest }: Props) {
	const { activeQuestId, setActiveQuestId } = useActiveQuest();

	const { filters } = useFilters();
	const { searchTags, search } = filters;

	const isOpen = activeQuestId === quest.uuid;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<div onClick={() => setActiveQuestId(quest.uuid)} className='w-full'>
				<WitcherQuest
					uuid={quest.uuid}
					title={quest.title}
					search={search}
					searchTags={searchTags}
					shortDesc={quest.description.slice(0, 60) + "..."}
					level={quest.level}
					tags={quest.tags.map((t) => t.name)}
					locationImage={quest.location.banner.url}
					type={quest.quest_type}
					rewards={quest.rewards}
				/>
			</div>

			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 z-30 bg-black/80 backdrop-blur-sm' />

				<Dialog.Content>
					<VisuallyHidden.Root>
						<Dialog.Title>{quest.title}</Dialog.Title>
					</VisuallyHidden.Root>

					<QuestModalLayout quest={quest} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
