"use client";

import Quest from "@/app/components/quest/Quest";

export default function QuestList() {
	return (
		<div className='w-full px-3 gap-5 flex-col items-center flex justify-center'>
			<Quest />
			<Quest />
			<Quest />
		</div>
	);
}
