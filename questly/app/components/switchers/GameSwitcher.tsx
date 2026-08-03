"use client";

import { useTranslations } from "next-intl";
import NavLogo from "@/app/components/navbar/NavLogo";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import GameSwitcherSkeleton from "./GameSwitcherSkeleton";
import GameSwitcherContent from "@/app/components/switchers/GameSwitcherContent";
import ContentBoundary from "@/app/components/ContentBoundary";

type Props = {
	game?: string;
};

export default function GameSwitcher({ game }: Props) {
	const t = useTranslations("switchers");

	return (
		<SwitcherDialog game={game} trigger={<NavLogo game={game} />} title={t("selectGame")}>
			<ContentBoundary hideBackground={true} fallback={<GameSwitcherSkeleton game={game} />}>
				<GameSwitcherContent game={game} />
			</ContentBoundary>
		</SwitcherDialog>
	);
}
