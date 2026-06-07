"use client";

import { QuestTitle } from "./QuestTitle";

import { QuestDescription } from "./QuestDescription";
import { QuestTags } from "@/app/components/quest/parts/QuestTags";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { Quest } from "@/app/types/quest";

type Props = {
	completed: boolean;
	search: string;
	searchTags: boolean;

	quest: Quest;
};

export function QuestContent({ quest, searchTags, completed, search }: Props) {
	const styles = useGameStyles(questVariants);
	const { description } = quest;
	const shortDesc = description.slice(0, 60) + "...";
	return (
		<div className={styles.content.base()}>
			<QuestTitle title={quest.title} dlc={quest.dlc} missable={quest.missable} search={search} />

			<QuestDescription description={shortDesc} />

			<QuestTags quest={quest} search={search} searchTags={searchTags} completed={completed} />
		</div>
	);
}
