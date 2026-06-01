"use client";

import { QuestTitle } from "./QuestTitle";

import { QuestDescription } from "./QuestDescription";
import { QuestTags } from "@/app/components/quest/parts/QuestTags";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	title: string;
	shortDesc: string;
	tags: string[];
	completed: boolean;
	search: string;
	searchTags: boolean;
	level: number;
	dlc: {
		title: string;
		color: string;
		icon: {
			url: string;
		};
	};
};

export function QuestContent({ title, shortDesc, dlc, tags, searchTags, completed, search }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<div className={styles.content.base()}>
			<QuestTitle title={title} dlc={dlc} search={search} />

			<QuestDescription description={shortDesc} />

			<QuestTags tags={tags} dlc={dlc} search={search} searchTags={searchTags} completed={completed} />
		</div>
	);
}
