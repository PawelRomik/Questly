import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	title: string;
	shortDesc: string;
	tags: string[];
	completed: boolean;
	search: string;
	searchTags: boolean;
	level: number;
};

export function QuestContent({ title, shortDesc, tags, searchTags, completed, search, level }: Props) {
	return (
		<div className='flex flex-col items-start flex-1'>
			<div className='flex items-center justify-center gap-1 '>
				<h2
					className={`text-lg italic border-b-2  ${completed ? "border-green-600" : "border-red-600"} rounded-md px-2 font-semibold ${completed ? "line-through text-zinc-400" : "text-white"}`}
				>
					{highlightText(title, search)}
				</h2>
				<div className='flex items-center justify-center gap-1'>
					<h2
						className={`text-lg italic border-b-2 ${completed ? "border-green-600" : "border-red-600"} rounded-md px-2 font-semibold ${
							completed ? "line-through text-zinc-400" : "text-white"
						}`}
					>
						{highlightText(title, search)}
					</h2>

					<div className='flex flex-col items-center leading-none'>
						<span
							className='
				relative inline-block
				text-xs font-bold px-2 rounded-full
				text-black
				bg-linear-to-br from-yellow-300 via-yellow-400 to-yellow-600
				border border-yellow-300
				shadow-[0_0_6px_rgba(255,215,0,0.6)]
			'
						>
							{level}
						</span>

						<div className='flex -mt-0.5'>
							<div
								className='w-0 h-0 
				border-t-[6px] border-t-yellow-500
				border-l-10 border-l-transparent
				border-r-[3px] border-r-transparent'
							/>

							<div
								className='w-0 h-0 
				border-l-[6px] border-l-transparent 
				border-r-[6px] border-r-transparent 
				border-t-8 border-t-yellow-400'
							/>

							<div
								className='w-0 h-0 
				border-t-[6px] border-t-yellow-500
				border-r-10 border-r-transparent
				border-l-[3px] border-l-transparent'
							/>
						</div>
					</div>
				</div>
			</div>

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
