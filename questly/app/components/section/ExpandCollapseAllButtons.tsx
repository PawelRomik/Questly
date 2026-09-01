"use client";

import { useSectionExpand } from "@/app/context/SectionExpandContext";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	game: string;
};

export function ExpandCollapseAllButtons({ game }: Props) {
	const { expandAll, collapseAll } = useSectionExpand()!;
	const t = useTranslations("common");
	const theme = getTheme("filter", game);

	return (
		<div className='flex gap-2 items-center justify-center lg:justify-start  w-full mt-2'>
			<button type='button' onClick={expandAll} className={theme.localStorageButton()}>
				{t("expandAll")}
			</button>

			<button type='button' onClick={collapseAll} className={theme.localStorageButton()}>
				{t("collapseAll")}
			</button>
		</div>
	);
}
