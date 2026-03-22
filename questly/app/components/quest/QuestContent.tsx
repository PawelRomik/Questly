import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	title: string;
	shortDesc: string;
	tags: string[];
	completed: boolean;
	search: string;
	searchTags: boolean;
};

export function QuestContent({ title, shortDesc, tags, searchTags, completed, search }: Props) {
	return (
		<div className='flex flex-col items-start flex-1'>
			<h2 className={`text-lg font-semibold ${completed ? "line-through text-zinc-400" : "text-white"}`}>{highlightText(title, search)}</h2>

			<p className='text-sm text-left text-zinc-400'>{shortDesc}</p>

			<div className='flex gap-2 mt-2 flex-wrap'>
				{tags.map((tag) => (
					<span key={tag} className='text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300'>
						{searchTags ? highlightText(tag, search) : tag}
					</span>
				))}

				{completed && <span className='text-xs px-2 py-1 rounded bg-green-600 text-white'>✔ Completed</span>}
			</div>
		</div>
	);
}
