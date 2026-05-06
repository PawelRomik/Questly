import Link from "next/link";
import Image from "next/image";
import questIcon from "../../../../public/assets/quest.png";
import { useNextQuest } from "@/app/hooks/useNextQuest";
import { useParams } from "next/navigation";
import { useCompleted } from "@/app/context/CompletedContext";

type Props = {
	uuid: string;
};

export function ModalFooter({ uuid }: Props) {
	const { game } = useParams() as { game: string };
	const { nextQuest } = useNextQuest(uuid);
	const { isCompleted, toggle } = useCompleted(game, "quests");

	return (
		<div className='col-[1/4] row-5 border-t bg-black/50 border-[#3a3a3a] flex items-center justify-end gap-4 px-4'>
			<button
				onClick={() => toggle(uuid)}
				className={`
          px-5 py-2
          flex items-center gap-2
          text-sm tracking-wide
          border transition-all duration-200 cursor-pointer

          ${
						isCompleted(uuid)
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
              `
					}

          shadow-[inset_0_0_12px_rgba(255,0,0,0.08)]
        `}
			>
				Completed
				<span className='border border-current w-5 h-5 p-0.5 flex items-center justify-center'>
					<svg viewBox='0 0 24 24' className={`${isCompleted(uuid) ? "opacity-100" : "opacity-0"} transition fill-current`}>
						<path d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
					</svg>
				</span>
			</button>

			{nextQuest && (
				<Link href={`?activeQuest=${nextQuest.uuid}`} className='text-xs flex items-center justify-center'>
					<button
						className='
              px-5 py-2 text-sm tracking-wide
              flex items-center justify-center gap-2
              cursor-pointer

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
						Next quest:
						<span className='italic text-[#a68b5b]'>{nextQuest.title}</span>
					</button>
				</Link>
			)}
		</div>
	);
}
