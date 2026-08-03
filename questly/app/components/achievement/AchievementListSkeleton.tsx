"use client";

import AchievementSkeleton from "./AchievementSkeleton";

type Props = {
	game?: string;
	count?: number;
};

export default function AchievementListSkeleton({ game, count = 10 }: Props) {
	return (
		<div className='w-full flex flex-col gap-3 items-center'>
			{Array.from({ length: count }).map((_, i) => (
				<AchievementSkeleton key={i} game={game} />
			))}
		</div>
	);
}
