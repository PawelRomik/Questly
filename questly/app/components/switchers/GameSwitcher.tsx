"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import NavLogo from "@/app/components/navbar/NavLogo";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import GameSwitcherSkeleton from "./GameSwitcherSkeleton";
import GameSwitcherContent from "@/app/components/switchers/GameSwitcherContent";
import ContentBoundary from "@/app/components/ContentBoundary";

type Props = {
	game?: string;
	trigger?: ReactNode;
};

export default function GameSwitcher({ game, trigger }: Props) {
	const t = useTranslations("switchers");

	return (
		<SwitcherDialog game={game} trigger={trigger ?? <NavLogo game={game} />} title={t("selectGame")}>
			<ContentBoundary hideBackground fallback={<GameSwitcherSkeleton game={game} />}>
				<GameSwitcherContent game={game} />
			</ContentBoundary>
		</SwitcherDialog>
	);
}
