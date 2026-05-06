import { PT_Sans } from "next/font/google";

import { Quest } from "@/app/types/quest";
import FixedImage from "@/app/components/common/FixedImage";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

type Props = {
	quest: Quest;
};

export function ModalHeader({ quest }: Props) {
	return (
		<div
			className={`
        col-[2/4]
        row-1
        flex items-center gap-3
        border-3 border-[rgb(75,63,13)]
        px-4 py-3
        bg-linear-to-r from-[#0a0a0a] via-[#1a1405] to-[#0a0a0a]
        text-xl uppercase
        ${ptSans.className}
      `}
		>
			<FixedImage src={quest.location.banner.url} className='w-13.75 object-contain object-bottom-right' alt={quest.location.name} />

			<div>
				<h2 className='tracking-wide text-white'>{quest.title}</h2>

				<p className='text-sm text-[rgb(255,203,14)]'>
					{quest.location.name} | {quest.quest_type.name}
				</p>

				<p className='text-sm text-white'>Suggested level {quest.level}</p>
			</div>
		</div>
	);
}
