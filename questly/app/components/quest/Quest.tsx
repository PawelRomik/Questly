"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type QuestProps = {
	title: React.ReactNode;
	shortDesc: string;
	level: number;
	tags: React.ReactNode[];
	locationImage: StaticImageData;
};

export default function Quest({ title, shortDesc, level, tags, locationImage }: QuestProps) {
	const [completed, setCompleted] = useState(false);

	const toggleComplete = () => {
		setCompleted((prev) => !prev);
	};

	return (
		<div
			className={`w-full max-w-xl cursor-pointer flex items-center gap-4 p-4 rounded-xl border transition-all
			${completed ? "bg-zinc-900 border-green-600 opacity-80" : "bg-zinc-800 border-zinc-700 hover:border-red-600"}
			`}
		>
			<div className='relative flex items-center justify-center'>
				<div className='p-2 rounded-lg bg-zinc-900 border border-zinc-700'>
					<Image src={locationImage} className='h-12.5 w-12.5 object-contain' alt='location flag' />
				</div>

				<span className='absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full'>{level}</span>
			</div>

			<div className='flex flex-col items-start flex-1'>
				<h2 className={`text-lg font-semibold ${completed ? "line-through text-zinc-400" : "text-white"}`}>{title}</h2>

				<p className='text-sm text-left text-zinc-400'>{shortDesc}</p>

				<div className='flex gap-2 mt-2 flex-wrap'>
					{tags.map((tag, i) => (
						<span key={i} className='text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300'>
							{tag}
						</span>
					))}

					{completed && <span className='text-xs px-2 py-1 rounded bg-green-600 text-white'>✔ Completed</span>}
				</div>
			</div>

			<button
				onClick={toggleComplete}
				className={`px-4 py-2 text-sm font-medium rounded-lg transition cursor-pointer
				${completed ? "bg-green-600 hover:bg-green-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
			>
				{completed ? "Undo" : "Complete"}
			</button>
		</div>
	);
}
