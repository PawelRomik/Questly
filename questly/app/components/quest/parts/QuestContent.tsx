"use client";

import { QuestTitle } from "./QuestTitle";

import { QuestDescription } from "./QuestDescription";
import { QuestTags } from "@/app/components/quest/parts/QuestTags";
import { Quest } from "@/app/types/quest";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed: boolean;
	searchTags: boolean;
	quest: Quest;
	game?: string;
};

export function QuestContent({ quest, searchTags, completed, game }: Props) {
	const { description } = quest;
	const shortDesc = description.slice(0, 60) + "...";
	const theme = getTheme("quest", game);
	return (
		<div className={theme.content.base()}>
			<QuestTitle game={game} quest={quest} />

			<QuestDescription game={game} description={shortDesc} />

			<QuestTags game={game} quest={quest} searchTags={searchTags} completed={completed} />
		</div>
	);
}
