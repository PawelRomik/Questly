"use client";

import { QuestTitle } from "./QuestTitle";

import { QuestDescription } from "./QuestDescription";
import { QuestTags } from "@/app/components/quest/parts/QuestTags";
import { questVariants } from "@/app/components/quest/variant/questVariants";

type Props = {
	title: string;
	shortDesc: string;
	tags: string[];
	completed: boolean;
	search: string;
	searchTags: boolean;
	level: number;
};

export function QuestContent({ title, shortDesc, tags, searchTags, completed, search }: Props) {
	const styles = questVariants["witcher3"];
	return (
		<div className={styles.content.base()}>
			<QuestTitle title={title} search={search} />

			<QuestDescription description={shortDesc} />

			<QuestTags tags={tags} search={search} searchTags={searchTags} completed={completed} />
		</div>
	);
}
