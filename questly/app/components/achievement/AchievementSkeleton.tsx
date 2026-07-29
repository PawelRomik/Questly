"use client";

import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export default function AchievementSkeleton({ game }: Props) {
	const theme = getTheme("achievement", game);

	return (
		<div className={`${theme.achievement(false)} min-h-27.5 `}>
			<div className={`${theme.image.wrapper()}`}></div>
		</div>
	);
}
