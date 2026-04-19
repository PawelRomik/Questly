"use client";

import { Item } from "@/app/types/quest";
import { Tooltip } from "radix-ui";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import itemIcon from "../../../public/assets/item.webp";

export function ItemDisplay({ item }: { item: Item }) {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<div className='flex items-center text-xs gap-2 cursor-pointer'>
					<span className=' py-1 rounded-l ' style={{ color: item.rarity.color }}>
						<Image src={itemIcon} className='w-3 object-contain' unoptimized alt={item.name} />
					</span>

					<span className=' py-1 h-full  rounded-r ' style={{ color: item.rarity.color }}>
						{item.name}
						{item.amount > 1 && <span className='ml-1 text-gray-400'>x{item.amount}</span>}
					</span>
				</div>
			</Tooltip.Trigger>

			<Tooltip.Portal>
				<Tooltip.Content side='top' className='bg-zinc-950 border border-yellow-700 text-gray-200 p-3 rounded shadow-xl w-64'>
					<div className='mb-2 flex justify-center'>
						<Image unoptimized src={`http://localhost:1337${item.image.url}`} alt={item.name} width={80} height={80} className='rounded border border-zinc-700' />
					</div>

					<div
						className='font-semibold mb-1 text-center'
						style={{
							color: item.rarity.color,
							textShadow: `0 0 8px ${item.rarity.color}66`
						}}
					>
						{item.name}
					</div>

					<div className='text-xs mb-1 text-center' style={{ color: item.rarity.color }}>
						{item.rarity.name}
					</div>

					<div className='text-xs text-gray-400 mb-1 text-center'>{item.type}</div>

					<div className='text-xs text-gray-300 mb-2 text-center'>
						<ReactMarkdown>{item.description}</ReactMarkdown>
					</div>

					<div className='text-xs text-gray-500 flex justify-between mt-2'>
						<span>💰 {item.price}</span>
						<span>{item.game}</span>
					</div>

					<Tooltip.Arrow className='fill-yellow-700' />
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
}
