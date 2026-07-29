"use client";

import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export default function GamePreviewSkeleton({ game }: Props) {
	const theme = getTheme("preview", game);

	return (
		<div className={`${theme.container()} `}>
			<div className={theme.banner.base()}>
				<div className='absolute inset-0 bg-[#141414]' />
			</div>

			<div className={theme.description.base()}>
				<div className='w-full px-8 space-y-3'>
					<div className='h-4 w-full rounded bg-white/7' />
					<div className='h-4 w-[90%] mx-auto rounded bg-white/7' />
					<div className='h-4 w-[75%] mx-auto rounded bg-white/7' />
				</div>
			</div>

			<div className={theme.statistics()}>
				<div className='grid h-full grid-rows-4 divide-y divide-white/10'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={i} className='flex px-5  items-center justify-center gap-3'>
							<div className='h-4 w-full rounded bg-white/7' />
						</div>
					))}
				</div>
			</div>

			<div className={theme.button.container()}>
				<div className={theme.button.base()}></div>
			</div>
		</div>
	);
}
