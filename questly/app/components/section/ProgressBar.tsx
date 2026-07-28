"use client";

import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed: number;
	total: number;
	game?: string;
};

export default function ProgressBar({ completed, total, game }: Props) {
	const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

	const isComplete = percent === 100;

	const theme = getTheme("section", game);

	return (
		<div className={theme.progressBar.base()}>
			<div className={theme.progressBar.track()}>
				<div className={theme.progressBar.fill(isComplete)} style={{ width: `${percent}%` }} />
			</div>
		</div>
	);
}
