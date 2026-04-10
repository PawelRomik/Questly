import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	title: string;
	description: string;
	completed: boolean;
	search: string;
};

export function AchievementContent({ title, description, completed, search }: Props) {
	return (
		<div className='flex flex-col items-start flex-1'>
			<h2 className={`text-lg font-semibold ${completed ? "line-through text-zinc-400" : "text-white"}`}>{highlightText(title, search)}</h2>

			<p className='text-sm text-left text-zinc-400'>{description}</p>

			<div className='flex gap-2 mt-2 flex-wrap'>{completed && <span className='text-xs px-2 py-1 rounded bg-green-600 text-white'>✔ Completed</span>}</div>
		</div>
	);
}
