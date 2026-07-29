"use client";

import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
	count?: number;
};

export default function GameSwitcherSkeleton({ game, count = 3 }: Props) {
	const theme = getTheme("switcher", game);

	return (
		<div className='animate-pulse [animation-duration:3s]'>
			<div className={theme.switcher.searchbar.container()}>
				<div className='h-10 w-full rounded bg-white/8' />
			</div>

			<div className={theme.switcher.grid()}>
				{Array.from({ length: count }).map((_, i) => (
					<div key={i} className='flex flex-col items-center justify-between p-4'>
						<div className='w-24 h-24 rounded-lg bg-white/8' />
					</div>
				))}
			</div>
		</div>
	);
}
