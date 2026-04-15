"use client";

import { QuestImage } from "./QuestImage";
import { QuestContent } from "./QuestContent";
import { QuestButton } from "./QuestButton";
import { QuestProps } from "@/app/components/quest/types";

export default function Quest({ title, characterImage, shortDesc, level, tags, locationImage, searchTags, search, completed, onToggle }: QuestProps) {
	return (
		<div
			className={`
		relative w-[95%] mx-auto  cursor-pointer before:absolute before:inset-0 before:rounded-xl 
before:bg-linear-to-r before:from-white/5 before:to-transparent 
before:pointer-events-none flex items-center gap-4 p-4 rounded-xl
		bg-zinc-800 border hover:translate-x-1 hover:-translate-y-0.5 hover:scale-[1.01]
transition-all  duration-200 ${completed && "brightness-60"} hover:shadow-[0_0_20px_rgba(38,38,38,0.15)] border-zinc-700 overflow-hidden
	`}
		>
			<div className='pointer-events-none absolute  inset-y-0 left-0 w-10'>
				<div className={`absolute top-0 left-0 w-2 h-1/2  ${completed ? "bg-green-600" : "bg-red-600"} rounded-br-2xl`}></div>
				<div className={`absolute bottom-0 left-0 w-2 h-1/2   ${completed ? "bg-green-600" : "bg-red-600"} rounded-tr-2xl`}></div>
			</div>

			<div className='flex gap-2'>
				<QuestImage completed={completed} width='full' src={locationImage} />

				<div className='hidden lg:block'>
					<QuestImage completed={completed} src={characterImage} />
				</div>
			</div>

			<QuestContent title={title} level={level} shortDesc={shortDesc} tags={tags} completed={completed} search={search} searchTags={searchTags} />
			<div className='text-xs text-zinc-400 flex flex-col'>
				<span className='text-yellow-400 font-semibold'>+250 XP</span>
			</div>
			<div className='w-px h-8 bg-zinc-700 mx-2' />

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
