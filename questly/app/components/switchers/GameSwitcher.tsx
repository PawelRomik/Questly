"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import NavLogo from "@/app/components/navbar/NavLogo";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import GameSwitcherSkeleton from "./GameSwitcherSkeleton";
import GameSwitcherContent from "@/app/components/switchers/GameSwitcherContent";

type Props = {
	game?: string;
};

export default function GameSwitcher({ game }: Props) {
	const t = useTranslations("switchers");

	return (
		<SwitcherDialog game={game} trigger={<NavLogo game={game} />} title={t("selectGame")}>
			<Suspense fallback={<GameSwitcherSkeleton game={game} />}>
				<GameSwitcherContent game={game} />
			</Suspense>
		</SwitcherDialog>
	);
}
