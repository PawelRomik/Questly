"use client";

import { getTheme } from "@/app/lib/utils/getTheme";
import { Requirement } from "@/app/types/quest";
import { useTranslations } from "next-intl";

type Props = {
	requirements?: Requirement[];
	game?: string;
};

export default function ModalRequirements({ requirements = [], game }: Props) {
	const theme = getTheme("questModal", game);
	const t = useTranslations();

	const hasRequirements = requirements.length > 0;

	if (!hasRequirements) {
		return null;
	}

	return (
		<section>
			<h3 className={theme.requirements.title()}>{t("quests.requirements")}</h3>

			<ul className={theme.requirements.list()}>
				{requirements.map((requirement, index) => (
					<li key={index} className='flex items-center gap-2'>
						<span className={theme.requirements.marker()} />

						<div className={theme.requirements.tag()}>{requirement.desc}</div>
					</li>
				))}
			</ul>
		</section>
	);
}
