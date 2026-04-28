"use client";

import ProgressBar from "@/app/components/quest/ProgressBar";
import { useCompleted } from "@/app/hooks/useCompleted";
import { CollectionType } from "@/app/types/collection";
import { PT_Sans } from "next/font/google";
import Image from "next/image";
import { useParams } from "next/navigation";

type Props = {
	collection: CollectionType;
};

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

export default function Collection({ collection }: Props) {
	const { title, items } = collection;

	const params = useParams();
	const game = params.game as string;

	const { toggleCollectionItem, isCollectionItemCompleted } = useCompleted(game, "collections");

	const isCollectionComplete = items.every((i) => isCollectionItemCompleted(collection.uuid, i.uuid));

	const handleItemClick = (uuid: string) => {
		toggleCollectionItem(collection.uuid, uuid);
	};

	const handleCompleteAll = () => {
		items.forEach((item) => {
			if (!isCollectionItemCompleted(collection.uuid, item.uuid)) {
				toggleCollectionItem(collection.uuid, item.uuid);
			}
		});
	};

	const handleReset = () => {
		items.forEach((item) => {
			if (isCollectionItemCompleted(collection.uuid, item.uuid)) {
				toggleCollectionItem(collection.uuid, item.uuid);
			}
		});
	};

	const completedCount = items.filter((i) => isCollectionItemCompleted(collection.uuid, i.uuid)).length;

	const total = items.length;

	return (
		<div
			className={`
				relative w-[95%] mx-auto flex flex-col gap-4 p-4
				transition-all duration-200
				hover:translate-x-1 hover:-translate-y-0.5
				${ptSans.className}
				overflow-hidden
				border 
				shadow-[0_0_20px_rgba(0,0,0,0.7)]
				bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]

				${isCollectionComplete ? "border-[#1f6b2b] opacity-70 scale-95 hover:scale-100 inset-shadow-[0_0_25px_rgba(0,255,100,0.15)]" : "border-[rgb(40,37,28)] hover:scale-[1.01]"}
			`}
		>
			<div className='pointer-events-none absolute inset-y-0 left-0 w-12'>
				<div className={`absolute top-0 left-0 w-1 h-full ${isCollectionComplete ? "bg-[#2fa34a]" : "bg-[#c6a85a]"} opacity-80`} />
				<div className={`absolute top-0 left-0 w-4 h-full ${isCollectionComplete ? "bg-[#2fa34a]" : "bg-[#c6a85a]"} opacity-20 blur-md`} />
			</div>

			<div className='z-10 w-full flex flex-col gap-1'>
				<div className='flex justify-between items-center'>
					<h2 className='text-[#e6d3a3] text-lg font-bold tracking-wide'>{title}</h2>

					<span className='text-sm text-zinc-400 font-semibold'>
						{completedCount} / {total}
					</span>
				</div>

				<ProgressBar completed={completedCount} total={total} />
			</div>

			<div className='grid grid-cols-3 gap-3 place-items-center z-10'>
				{items.map((item) => {
					const completed = isCollectionItemCompleted(collection.uuid, item.uuid);

					return (
						<div
							key={item.uuid}
							onClick={() => handleItemClick(item.uuid)}
							className={`
								cursor-pointer transition-all duration-200 flex flex-col items-center
								${completed ? "opacity-40 scale-90" : "hover:scale-110"}
							`}
						>
							<Image
								width={100}
								height={100}
								src={`http://localhost:1337${item.image.url}`}
								unoptimized
								alt={item.name}
								className='w-28 h-28 object-contain hover:scale-115 transition'
							/>
						</div>
					);
				})}
			</div>

			<button
				onClick={isCollectionComplete ? handleReset : handleCompleteAll}
				className={`
		w-full h-10 flex items-center justify-center
		border transition-all duration-200 cursor-pointer
		shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
		font-bold tracking-wide

		${
			isCollectionComplete
				? "border-[#6b1f1f] bg-linear-to-b from-[#3a0d0d] to-[#1a0505] text-[#e6a3a3] hover:border-[#a33]"
				: "border-[#1f6b2b] bg-linear-to-b from-[#0f2a14] to-[#07150a] text-[#9be3a7] hover:border-[#2fa34a]"
		}
	`}
			>
				{isCollectionComplete ? "RESET" : "COMPLETE"}
			</button>

			<div className='absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_60%)] opacity-0 hover:opacity-100 transition pointer-events-none' />
		</div>
	);
}
