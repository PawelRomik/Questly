"use client";

import { useNextQuest } from "@/app/hooks/useNextQuest";
import Image from "next/image";
import Link from "next/link";

type Props = {
	type: string;
	tags: string[];
	locationImage: string;
	uuid: string;
};

export function ModalMeta({ type, tags, locationImage, uuid }: Props) {
	const secondaryTag = tags.find((t) => t !== type);

	const { nextQuest } = useNextQuest(uuid);
	console.log(nextQuest, uuid);

	return (
		<div className='flex justify-between items-center px-3 pt-3 bg-zinc-900'>
			{/* LEFT */}
			<div className='flex gap-3 items-center'>
				<p className='text-sm border-r border-gray-400 pr-3 text-yellow-400 mb-4'>{type}</p>

				<div className='flex gap-2 items-center'>
					<p className='text-sm text-gray-400 mb-4'>{secondaryTag || "Unknown"}</p>

					<Image unoptimized width={1000} height={1000} src={locationImage} className='w-6.25 h-6.25 object-contain' alt='location' />
				</div>
			</div>

			{/* RIGHT - NEXT QUEST */}
			{nextQuest && (
				<Link href={`?activeQuest=${nextQuest.uuid}`} className='text-xs text-blue-400 hover:text-blue-300 underline mb-4'>
					→ {nextQuest.title}
				</Link>
			)}
		</div>
	);
}
