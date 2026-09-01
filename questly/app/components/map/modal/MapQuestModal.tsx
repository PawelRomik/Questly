"use client";

import { useActiveQuest } from "@/app/hooks/useActiveQuest";
import { ReactNode } from "react";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	initialUuid: string;
	trigger: ReactNode;
	game: string;
};

export default function MapQuestModal({ initialUuid, trigger, game }: Props) {
	const { setActiveQuestId } = useActiveQuest();
	const theme = getTheme("questModal", game);

	return (
		<div onClick={() => setActiveQuestId(initialUuid)} className={theme.trigger()}>
			{trigger}
		</div>
	);
}
