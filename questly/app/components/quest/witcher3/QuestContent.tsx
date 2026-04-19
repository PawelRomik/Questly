import { highlightText } from "@/app/lib/utils/highlightText";
import ReactMarkdown from "react-markdown";

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
	return (
		<div className='flex flex-col items-start flex-1'>
			<div className='flex items-center justify-center gap-1 '>
				<div className='flex items-center justify-center gap-1'>
					<h2 className={`text-lg text-white      `}>{highlightText(title, search)}</h2>
				</div>
			</div>

			<p className='text-sm text-left text-zinc-400'>
				<ReactMarkdown>{shortDesc}</ReactMarkdown>
			</p>

			<div className='flex gap-2 mt-2 flex-wrap'>
				{tags.map((tag) => (
					<span
						key={tag}
						className={`
        text-[10px] uppercase tracking-wide px-2 py-1
        border border-[rgb(40,37,28)]
        bg-linear-to-b from-[#2a261c] to-[#1a1711]
        text-[#e6d3a3]
        shadow-[inset_0_0_6px_rgba(255,215,0,0.08)]
        hover:border-[#c6a85a] hover:text-white
        transition
      `}
					>
						{searchTags ? highlightText(tag, search) : tag}
					</span>
				))}

				{completed && (
					<span
						className={`
        text-[10px] uppercase tracking-wide px-2 py-1
        border border-[#1f6b2b]
        bg-linear-to-b from-[#0f2a14] to-[#07150a]
        text-[#b7f5c5]
        shadow-[inset_0_0_8px_rgba(0,255,100,0.1)]
      `}
					>
						✔ Completed
					</span>
				)}
			</div>
		</div>
	);
}
