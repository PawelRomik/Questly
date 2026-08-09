"use client";

import CollectionSkeleton from "./CollectionSkeleton";

type Props = {
	count?: number;
};

export default function CollectionListSkeleton({ count = 3 }: Props) {
	return (
		<div className='w-full flex flex-wrap gap-8'>
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className='flex-1 min-w-105'>
					<CollectionSkeleton />
				</div>
			))}
		</div>
	);
}
