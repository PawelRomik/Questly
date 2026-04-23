"use client";

import { Requirement } from "@/app/types/quest";
import Link from "next/link";
import quest from "../../../public/assets/quest.png";
import Image from "next/image";

type Props = {
	requirements: Requirement[];
};

export const RequirementsList = ({ requirements }: Props) => {
	if (!requirements?.length) return null;

	return (
		<div className=' '>
			<div className='flex flex-wrap gap-2 mt-4'>
				{requirements.map((req, index) => {
					switch (req.type) {
						case "quest":
							return (
								<div key={index} className='flex items-center'>
									<Image src={quest} unoptimized className='w-4.5' alt='quest' />
									<span className='pr-2 py-1 text-xs  rounded-l'>Completed quest: </span>

									<Link href={`?activeQuest=${req.quest.uuid}`} className=' py-1 text-xs  rounded-r text-[#a68b5b] hover:text-blue-300 underline'>
										{req.quest.title}
									</Link>
								</div>
							);

						case "level":
							return (
								<div key={index} className='flex items-center'>
									<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>Level</span>
									<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>{req.level}</span>
								</div>
							);

						case "item":
							return (
								<div key={index} className='flex items-center'>
									<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>{req.item.name}</span>
									<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>x{req.item_amount}</span>
								</div>
							);

						default:
							return null;
					}
				})}
			</div>
		</div>
	);
};
