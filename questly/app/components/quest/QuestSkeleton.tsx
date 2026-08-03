"use client";

import { getTheme } from "@/app/lib/utils/getTheme";

export default function QuestSkeleton() {
	const theme = getTheme("quest");

	return (
		<div className={`${theme.wrapper.base(false)} w-full animate-pulse [animation-duration:4s]`}>
			<div className={theme.meta.base()}>
				<div className={theme.meta.level()}>
					<div className='w-20 h-20 rounded-lg ' />
				</div>
			</div>
		</div>
	);
}
