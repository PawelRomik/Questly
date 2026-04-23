"use client";

import { QuestProps } from "@/app/components/quest/types";
import { QuestContent } from "@/app/components/quest/witcher3/QuestContent";
import { QuestImage } from "@/app/components/quest/witcher3/QuestImage";
import { PT_Sans } from "next/font/google";
import Image from "next/image";
import money from "../../../../public/assets/money.webp";
import item from "../../../../public/assets/item.webp";
import exp from "../../../../public/assets/xp.webp";
import { QuestButton } from "@/app/components/quest/witcher3/QuestButton";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

export default function WitcherQuest({ title, type, shortDesc, rewards, level, tags, locationImage, searchTags, search, completed, onToggle }: QuestProps) {
	return (
		<div
			className={`
  relative w-[95%] mx-auto cursor-pointer flex items-center gap-4 p-4
  transition-all duration-200
  hover:translate-x-1 hover:-translate-y-0.5
  ${ptSans.className}
  overflow-hidden
  border 
  shadow-[0_0_20px_rgba(0,0,0,0.7)]
  bg-linear-to-b from-[#1a1a1a]  to-[#0f0f0f]

  ${completed ? "border-[#1f6b2b] opacity-65 scale-95 hover:scale-100  inset-shadow-[0_0_25px_rgba(0,255,100,0.15)]" : " hover:scale-[1.01] border-[rgb(40,37,28)]"}
`}
		>
			{/* LEFT GLOW STRIP */}
			<div className='pointer-events-none absolute inset-y-0 left-0 w-12'>
				<div style={{ backgroundColor: !completed ? type.color : "#2fa34a" }} className='absolute top-0 left-0 w-1 h-full opacity-80' />
				<div style={{ backgroundColor: !completed ? type.color : "#2fa34a" }} className='absolute top-0 left-0 w-4 h-full opacity-20 blur-md' />
			</div>

			{/* ICON + LEVEL */}
			<div className='flex gap-3 items-center justify-center z-10'>
				<QuestImage completed={completed} icon={type.icon.url} width='full' src={locationImage} />

				<div className='flex flex-col items-center'>
					<span className='text-xs text-zinc-400 uppercase'>Lvl</span>
					<p className='text-white text-xl font-bold'>{level}</p>
				</div>
			</div>

			{/* CONTENT */}
			<div className='flex-1 z-10'>
				<QuestContent title={title} level={level} shortDesc={shortDesc} tags={tags} completed={completed} search={search} searchTags={searchTags} />
			</div>

			{/* REWARD */}
			<div className='text-xs text-zinc-400 flex flex-col items-end gap-1 z-10'>
				<span className='text-[#e6d3a3] uppercase tracking-wide'>Reward</span>
				<div className='flex items-center justify-center gap-3'>
					{rewards.experience > 0 && (
						<span className='text-zinc-400 font-semibold flex items-center gap-1'>
							+{rewards.experience}
							<Image src={exp} alt='xp' className='w-4 h-4' />
						</span>
					)}

					{rewards.money > 0 && (
						<span className='text-zinc-400 font-semibold flex items-center gap-1'>
							+{rewards.money}
							<Image src={money} alt='money' className='w-4 h-4' />
						</span>
					)}

					{rewards.items.length > 0 && (
						<span className='text-zinc-400 font-semibold flex items-center gap-1'>
							+ item
							<Image src={item} alt='item' className='w-4 h-4' />
						</span>
					)}
				</div>
			</div>

			{/* DIVIDER */}
			<div className='w-px h-10 bg-[rgb(40,37,28)] mx-2' />

			{/* BUTTON */}
			<QuestButton
				completed={completed}
				onClick={(e) => {
					e.stopPropagation();
					onToggle();
				}}
			/>

			{/* HOVER OVERLAY */}
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_60%)] opacity-0 hover:opacity-100 transition pointer-events-none' />
		</div>
	);
}
