"use client";

import { Dialog } from "radix-ui";
import { ModalCharacter } from "@/app/components/quest-modal/ModalCharacter";

import { ModalRewards } from "@/app/components/quest-modal/ModalRewards";
import { RequirementsList } from "@/app/components/quest-modal/RequirementsList";

import { QuestType, Requirement, Rewards } from "@/app/types/quest";
import { ModalMap } from "@/app/components/quest-modal/ModalMap";
import ReactMarkdown from "react-markdown";
import questIcon from "../../../public/assets/quest.png";

import { PT_Sans } from "next/font/google";
import Image from "next/image";
import { useNextQuest } from "@/app/hooks/useNextQuest";
import Link from "next/link";
import WitcherQuest from "@/app/components/quest/witcher3/WitcherQuest";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

type Props = {
	title: string;
	type: QuestType;
	desc: string;
	tags: string[];
	rewards: Rewards;
	locationImage: string;
	mapImage: string;
	characterImage: string;
	uuid: string;
	activeQuestId: string | null;
	setActiveQuestId: (id: string | null) => void;
	isCompleted: boolean;
	toggleCompleted: () => void;
	requirements: Requirement[];
	search: string;
	level: number;
	searchTags: boolean;
	location: string;
};

export default function WitcherModal({
	uuid,
	setActiveQuestId,
	activeQuestId,
	title,
	type,
	desc,
	tags,
	locationImage,
	mapImage,
	characterImage,
	rewards,
	isCompleted,
	location,
	toggleCompleted,
	requirements,
	search,
	level,
	searchTags
}: Props) {
	const isOpen = activeQuestId === uuid;
	const { nextQuest } = useNextQuest(uuid);

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveQuestId(null)}>
			<Dialog.Trigger asChild>
				<div onClick={() => setActiveQuestId(uuid)} className='w-full'>
					<WitcherQuest
						completed={isCompleted}
						onToggle={toggleCompleted}
						title={title}
						search={search}
						searchTags={searchTags}
						shortDesc={desc.slice(0, 60) + "..."}
						level={level}
						tags={tags}
						locationImage={locationImage}
						type={type}
						rewards={rewards}
					/>
				</div>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={`fixed inset-0 z-30 bg-black/80 backdrop-blur-sm `} />

				<Dialog.Content
					className='fixed left-1/2 top-1/2 z-40 w-250 min-h-150
					-translate-x-1/2 -translate-y-1/2
					bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
					border-4 border-[rgb(40,37,28)]
					shadow-[0_0_40px_rgba(0,0,0,0.9)]
					text-gray-200 overflow-hidden
					grid grid-cols-[220px_2fr_1fr]
					grid-rows-[auto_auto_1fr_100px_70px]'
				>
					{/* CHARACTER */}
					<div className='row-[1/4] col-1 border-r-3 border-b-3 border-[rgb(40,37,28)] '>
						<ModalCharacter src={characterImage} />
					</div>

					{/* MAP */}
					<div className='row-4 col-1 bg-black/20 border-[rgb(40,37,28)] border-b-3'>
						<ModalMap src={mapImage} />
					</div>

					{/* TITLE */}
					<div
						className={`col-[2/4] border-t-none flex items-center gap-3 row-1 border-3 border-[rgb(75,63,13)] px-4 py-3 bg-linear-to-r from-[#0a0a0a] via-[#1a1405] to-[#0a0a0a] ${ptSans.className} text-xl  uppercase `}
					>
						<Image unoptimized src={locationImage} width={100} className='w-13.75 object-contain object-bottom-right ' alt={location} height={100} />
						<div>
							<h2 className={`tracking-wide  text-white`}>{title}</h2>
							<p className='text-sm text-[rgb(255,203,14)]'>
								{location} | {type.name}
							</p>
							<p className='text-sm text-white'>Suggested level {level}</p>
						</div>
					</div>

					{/* DESC */}
					<div className={`col-2 ${ptSans.className}  row-3 flex flex-col p-3 gap-3 border-r-3 border-y-3 border-[rgb(40,37,28)] text-sm leading-relaxed text-gray-300`}>
						<ReactMarkdown>{desc}</ReactMarkdown>
					</div>

					{/* REQUIREMENTS */}
					<div className='col-3 row-[3/5] border-[rgb(40,37,28)] border-y-3 p-4 bg-black/20'>
						<h3 className='text-xs uppercase tracking-wider text-[#a68b5b] mb-2'>Requirements</h3>
						<RequirementsList requirements={requirements} />
					</div>

					{/* REWARDS */}
					<div className='col-2 row-4 flex flex-col p-4 border-3 border-t-0 border-[rgb(40,37,28)] bg-black/20'>
						<h3 className='text-xs uppercase tracking-wider text-[#a68b5b]'>Rewards</h3>
						<ModalRewards rewards={rewards} />
					</div>

					{/* FOOTER */}
					<div className='col-[1/4] row-5 border-t bg-black/50 border-[#3a3a3a] flex items-center justify-end gap-4 px-4'>
						<button
							onClick={toggleCompleted}
							className={`
    px-5 py-2 flex items-center gap-2 text-sm tracking-wide
    border transition-all duration-200 cursor-pointer

    ${
			isCompleted
				? `
          border-[#1f6b2b]
          bg-linear-to-b from-[#0f2a14] to-[#07150a]
          text-[#b7f5c5]
          hover:border-[#2fa34a]
        `
				: `
          border-[#6b1f1f]
          bg-linear-to-b from-[#3a0d0d] to-[#1a0505]
          text-[#f0d9a7]
          hover:border-[#a33]
          hover:from-[#5a1414] hover:to-[#2a0a0a]
        `
		}

    shadow-[inset_0_0_12px_rgba(255,0,0,0.08)]
  `}
						>
							Completed
							<span className='border border-current w-5 h-5 p-0.5 flex items-center justify-center'>
								<svg viewBox='0 0 24 24' className={`${isCompleted ? "opacity-100" : "opacity-0"} transition fill-current`}>
									<path d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
								</svg>
							</span>
						</button>
						{nextQuest && (
							<Link href={`?activeQuest=${nextQuest.uuid}`} className='text-xs flex items-center justify-center  '>
								<button
									className='
    px-5 py-2 text-sm tracking-wide flex items-center cursor-pointer justify-center gap-2

    border border-[#6b5a2b]
    bg-linear-to-b from-[#1a1a1a] to-[#0b0b0b]
    text-[#e6d3a3]

    hover:border-[#c6a85a]
    hover:text-white

    transition-all duration-200
    shadow-[inset_0_0_10px_rgba(255,215,0,0.05)]
  '
								>
									<Image alt='quest' src={questIcon} unoptimized className='w-5' />
									Next quest: <span className='italic text-[#a68b5b]'>{nextQuest.title}</span>
								</button>
							</Link>
						)}
					</div>

					{/* CLOSE */}
					<Dialog.Close asChild>
						<button
							className='absolute top-3 right-3 w-8 h-8 flex items-center justify-center
						bg-black/60 border border-[#444]
						hover:bg-[#7a1414] cursor-pointer transition'
						>
							✕
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
