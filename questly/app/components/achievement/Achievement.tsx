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
			className={`w-full ${isHidden && "bg-zinc-900"} cursor-pointer flex items-center gap-4 p-4 rounded-xl border transition-all
            ${completed ? "bg-zinc-900 border-green-600 opacity-80" : "bg-zinc-800 border-zinc-700 hover:border-red-600"}
            `}
		>
			<AchievementImage src={url} />

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
