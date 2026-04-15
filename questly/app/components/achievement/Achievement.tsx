"use client";

import { useState } from "react";
import { AchievementButton } from "@/app/components/achievement/AchievementButton";
import { AchievementContent } from "@/app/components/achievement/AchievementContent";
import { AchievementImage } from "@/app/components/achievement/AchievementImage";

type AchievementProps = {
	title: string;
	description: string;
	url: string;
	completed: boolean;
	secret: boolean;
	search: string;
	onToggle: (e: React.MouseEvent) => void;
};

export default function Achievement({ title, description, search, url, completed, secret, onToggle }: AchievementProps) {
	const [revealed, setRevealed] = useState(completed ? true : false);

	const isHidden = secret && !revealed && !completed;
	const newTitle = (() => {
		switch (true) {
			case secret && !search:
				return "Hidden Achievement";

			case secret && search != null:
				return `${title} (hidden)`;

			default:
				return title;
		}
	})();

	return (
		<div
			onClick={() => {
				if (secret && !completed) setRevealed(true);
			}}
			className={`
		relative w-[95%] mx-auto  cursor-pointer before:absolute before:inset-0 before:rounded-xl 
before:bg-linear-to-r before:from-white/5 before:to-transparent 
before:pointer-events-none flex items-center gap-4 p-4 rounded-xl
		${secret ? "bg-zinc-900" : "bg-zinc-800"} border hover:translate-x-1 hover:-translate-y-0.5 hover:scale-[1.01]
transition-all  duration-200 ${completed && "brightness-60"} hover:shadow-[0_0_20px_rgba(38,38,38,0.15)] border-zinc-700 overflow-hidden
	`}
		>
			<div className='pointer-events-none absolute  inset-y-0 left-0 w-10'>
				<div className={`absolute top-0 left-0 w-2 h-1/2  ${completed ? "bg-green-600" : "bg-red-600"} rounded-br-2xl`}></div>
				<div className={`absolute bottom-0 left-0 w-2 h-1/2   ${completed ? "bg-green-600" : "bg-red-600"} rounded-tr-2xl`}></div>
			</div>
			<AchievementImage completed={completed} src={url} />

			<AchievementContent search={search} title={isHidden ? newTitle : title} description={isHidden ? "Click to reveal details." : description} completed={completed} />

			<AchievementButton
				completed={completed}
				onClick={(e) => {
					e.stopPropagation();
					onToggle(e);
				}}
			/>
		</div>
	);
}
