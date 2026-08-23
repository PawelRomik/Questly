"use client";

import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { Quest } from "@/app/types/quest";
import QuestWrapper from "@/app/components/quest/parts/QuestWrapper";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	quest: Quest;
	game: string;
};

export default function QuestTrigger({ quest, game }: Props) {
	const { setActiveQuestId } = useActiveQuest();
	const theme = getTheme("questModal", game);

	return (
		<div onClick={() => setActiveQuestId(quest.uuid)} className={theme.trigger()}>
			<QuestWrapper game={game} quest={quest} />
		</div>
	);
}
