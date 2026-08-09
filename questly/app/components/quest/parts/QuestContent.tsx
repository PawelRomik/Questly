"use client";

import { QuestTitle } from "./QuestTitle";

import { QuestDescription } from "./QuestDescription";
import { Quest } from "@/app/types/quest";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed: boolean;
	searchTags: boolean;
	quest: Quest;
	game?: string;
};

export function QuestContent({ quest, game }: Props) {
	const { short_desc } = quest;
	const theme = getTheme("quest", game);
	return (
		<div className={theme.content.base()}>
			<QuestTitle game={game} quest={quest} />

			<QuestDescription game={game} description={short_desc} />
		</div>
	);
}
