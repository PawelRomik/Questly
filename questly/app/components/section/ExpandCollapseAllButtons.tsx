"use client";

import { useSectionExpand } from "@/app/context/SectionExpandContext";
import { useTranslations } from "next-intl";

export function ExpandCollapseAllButtons() {
	const { expandAll, collapseAll } = useSectionExpand()!;
	const t = useTranslations("common");

	return (
		<div className='flex gap-2 mb-2'>
			<button
				type='button'
				onClick={expandAll}
				className='cursor-pointer px-3 py-1.5 border border-[rgb(40,37,28)] bg-linear-to-b from-[#2a2214] via-[#20180f] to-[#15110b] text-[#d9c38b] text-xs uppercase tracking-wide transition hover:brightness-110 active:brightness-90'
			>
				{t("expandAll")}
			</button>

			<button
				type='button'
				onClick={collapseAll}
				className='cursor-pointer px-3 py-1.5 border border-[rgb(40,37,28)] bg-linear-to-b from-[#2a2214] via-[#20180f] to-[#15110b] text-[#d9c38b] text-xs uppercase tracking-wide transition hover:brightness-110 active:brightness-90'
			>
				{t("collapseAll")}
			</button>
		</div>
	);
}
