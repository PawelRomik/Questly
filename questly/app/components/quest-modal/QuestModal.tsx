"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { Quest } from "@/app/types/quest";
import { QuestModalLayout } from "@/app/components/quest-modal/QuestModalLayout";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import QuestWrapper from "@/app/components/quest/parts/QuestWrapper";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	quest: Quest;
};

export default function QuestModal({ quest }: Props) {
	const { activeQuestId, setActiveQuestId } = useActiveQuest();
	const styles = useGameStyles(questModalVariants);

	const isOpen = activeQuestId === quest.uuid;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<div onClick={() => setActiveQuestId(quest.uuid)} className={styles.trigger()}>
				<QuestWrapper quest={quest} />
			</div>

			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay()} />

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
