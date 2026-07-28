"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { Quest } from "@/app/types/quest";
import { QuestModalLayout } from "@/app/components/quest-modal/QuestModalLayout";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { GET_QUEST_BY_UUID } from "@/app/lib/queries";
import { useLocale } from "next-intl";
import { ReactNode } from "react";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	uuid: string;
	trigger: ReactNode;
	game: string;
};

type GetQuestModalVars = {
	uuid: string;
};

export default function MapQuestModal({ uuid, trigger, game }: Props) {
	const { activeQuestId, setActiveQuestId } = useActiveQuest();

	const isOpen = activeQuestId === uuid;
	const locale = useLocale();
	const theme = getTheme("questModal", game);

	const questData = useLocalizedList<Quest, GetQuestModalVars>({
		query: GET_QUEST_BY_UUID,
		vars: {
			uuid: uuid
		},
		locale,
		getItems: (data) => data?.quests ?? [],
		getId: (q) => q.uuid
	});

	const quest = questData[0];

	if (!quest) return null;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<div onClick={() => setActiveQuestId(uuid)} className={theme.trigger()}>
				{trigger}
			</div>

			<Dialog.Portal>
				<Dialog.Overlay className={theme.overlay()} />

				<Dialog.Content>
					<VisuallyHidden.Root>
						<Dialog.Title>{quest.title}</Dialog.Title>
					</VisuallyHidden.Root>

					<QuestModalLayout game={game} hideMap={true} quest={quest} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
