"use client";

import { NavButton } from "./NavButton";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";
type Props = {
	side: "left" | "right";
	game?: string;
};

export function NavMenu({ side, game }: Props) {
	const isLeft = side === "left";
	const { nav_icons } = useGameAssets();
	const t = useTranslations();
	const theme = getTheme("navbar", game);

	return (
		<div className={theme.menu.base()}>
			{isLeft ? (
				<>
					<NavButton game={game} id={0} href={`/${game}/quests`}>
						<FixedImage src={nav_icons[0] || ""} alt={t("quests.quests")} className={theme.menu.item()} />
						<span className={theme.menu.label()}>{t("quests.quests")}</span>
					</NavButton>

					<NavButton game={game} id={1} href={`/${game}/collectibles`}>
						<FixedImage src={nav_icons[1] || ""} alt={t("collections.collectibles")} className={theme.menu.item()} />
						<span className={theme.menu.label()}>{t("collections.collectibles")}</span>
					</NavButton>
				</>
			) : (
				<>
					<NavButton game={game} id={2} href={`/${game}/map`}>
						<FixedImage src={nav_icons[2] || ""} alt={t("map.map")} className={theme.menu.item()} />
						<span className={theme.menu.label()}>{t("map.map")}</span>
					</NavButton>

					<NavButton game={game} id={3} href={`/${game}/achievements`}>
						<FixedImage src={nav_icons[3] || ""} alt={t("achievements.achievements")} className={theme.menu.item()} />
						<span className={theme.menu.label()}>{t("achievements.achievements")}</span>
					</NavButton>
				</>
			)}
		</div>
	);
}
