"use client";

import PreviewBanner from "@/app/components/game-preview/PreviewBanner";
import PreviewButton from "@/app/components/game-preview/PreviewButton";
import PreviewDesc from "@/app/components/game-preview/PreviewDesc";
import PreviewStatistics from "@/app/components/game-preview/PreviewStatistics";

export default function GamePreview() {
	return (
		<div
			className='
				w-full
				h-[700px]
				flex
				flex-col
				overflow-hidden
				border-2
				border-[#00e0ff]/20
				bg-linear-to-b
				from-[#10131d]
				via-[#090b12]
				to-[#05070c]
				backdrop-blur-md
				shadow-[0_0_24px_rgba(0,0,0,0.75)]
			'
		>
			<PreviewBanner />
			<PreviewDesc />
			<PreviewStatistics />
			<PreviewButton />
		</div>
	);
}
