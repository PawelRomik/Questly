"use client";

import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	items?: number;
};

export default function CollectionSkeleton({ items = 8 }: Props) {
	const theme = getTheme("collection");

	return (
		<div className={`${theme.collection.base(false)}`}>
			{/* Grid */}
			<div className={theme.collection.grid()}>
				{Array.from({ length: items }).map((_, i) => (
					<div key={i} className='flex flex-col items-center gap-2'>
						<div className='w-28 h-28 rounded' />
					</div>
				))}
			</div>
		</div>
	);
}
