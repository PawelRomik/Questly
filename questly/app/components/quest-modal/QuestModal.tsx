"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { Quest } from "@/app/types/quest";
import { QuestModalLayout } from "@/app/components/quest-modal/QuestModalLayout";
import QuestWrapper from "@/app/components/quest/parts/QuestWrapper";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	quest: Quest;
	game: string;
};

export default function QuestModal({ quest, game }: Props) {
	const { activeQuestId, setActiveQuestId } = useActiveQuest();
	const theme = getTheme("questModal", game);

	const isOpen = activeQuestId === quest.uuid;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<div onClick={() => setActiveQuestId(quest.uuid)} className={theme.trigger()}>
				<QuestWrapper game={game} quest={quest} />
			</div>

			<Dialog.Portal>
				<Dialog.Overlay className={theme.overlay()} />

				<Dialog.Content>
					<VisuallyHidden.Root>
						<Dialog.Title>{quest.title}</Dialog.Title>
					</VisuallyHidden.Root>

					<QuestModalLayout game={game} quest={quest} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
