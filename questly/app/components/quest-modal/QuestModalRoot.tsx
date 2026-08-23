"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { QuestModalLayout } from "@/app/components/quest-modal/QuestModalLayout";
import { getTheme } from "@/app/lib/utils/getTheme";
import ContentBoundary from "@/app/components/ContentBoundary";
import { QuestModalSkeleton } from "@/app/components/quest-modal/QuestModalSkeleton";

type Props = {
	game: string;
};

export default function QuestModalRoot({ game }: Props) {
	const { activeQuestId, setActiveQuestId } = useActiveQuest();
	const theme = getTheme("questModal", game);

	const isOpen = !!activeQuestId;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<Dialog.Portal>
				<Dialog.Overlay className={theme.overlay()} />

				<Dialog.Content>
					<VisuallyHidden.Root>
						<Dialog.Title>Quest details</Dialog.Title>
					</VisuallyHidden.Root>

					<ContentBoundary fallback={<QuestModalSkeleton />}>
						<QuestModalLayout game={game} />
					</ContentBoundary>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
