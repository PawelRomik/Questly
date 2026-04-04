"use client";

import { QuestImage } from "./QuestImage";
import { QuestContent } from "./QuestContent";
import { QuestButton } from "./QuestButton";
import { QuestProps } from "@/app/components/quest/types";

export default function Quest({ title, shortDesc, level, tags, locationImage, searchTags, search, completed, onToggle }: QuestProps) {
	return (
		<div
			className={`w-full max-w-xl cursor-pointer flex items-center gap-4 p-4 rounded-xl border transition-all
			${completed ? "bg-zinc-900 border-green-600 opacity-80" : "bg-zinc-800 border-zinc-700 hover:border-red-600"}
			`}
		>
			<QuestImage src={locationImage} level={level} />

			<QuestContent title={title} shortDesc={shortDesc} tags={tags} completed={completed} search={search} searchTags={searchTags} />

			<QuestButton
				completed={completed}
				onClick={(e) => {
					e.stopPropagation();
					onToggle();
				}}
			/>
		</div>
	);
}
