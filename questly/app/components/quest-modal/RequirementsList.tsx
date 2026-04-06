"use client";

import { Requirement } from "@/app/types/quest";
import Link from "next/link";

type Props = {
	requirements: Requirement[];
};

export const RequirementsList = ({ requirements }: Props) => {
	if (!requirements?.length) return null;

	return (
		<div className='border-t border-r border-zinc-700 p-5 bg-zinc-900'>
			<h3 className='font-semibold text-gray-300 mb-2'>REQUIREMENTS</h3>

			<div className='flex flex-wrap gap-2 mt-4'>
				{requirements.map((req, index) => {
					switch (req.type) {
						case "quest":
							return (
								<div key={index} className='flex items-center'>
									<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>Quest</span>

									<Link href={`?activeQuest=${req.quest.uuid}`} className='px-2 py-1 text-xs bg-zinc-950 rounded-r text-blue-400 hover:text-blue-300 underline'>
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
