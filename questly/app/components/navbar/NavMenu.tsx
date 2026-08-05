"use client";

import { NavButton } from "./NavButton";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";
import GameSwitcher from "@/app/components/switchers/GameSwitcher";
import { Game } from "@/app/types/quest";

type Props = {
	side: "left" | "right";
	game: Game;
	mobile?: boolean;
	onNavigate?: () => void;
};

export function NavMenu({ side, game, mobile, onNavigate }: Props) {
	const isLeft = side === "left";
	const { nav_icons } = useGameAssets();
	const t = useTranslations();
	const theme = getTheme("navbar", game.slug);
	const { game_icon } = useGameAssets();

	return (
		<div className={mobile ? "flex flex-col" : theme.menu.base()}>
			{isLeft ? (
				<>
					{mobile && (
						<GameSwitcher
							game={game.slug}
							trigger={
								<div
									className='
									 w-full
                        flex
                        items-center
                        gap-4
                        px-5
                        py-4
						text-lg
                        border-b
                        border-white/10
                        hover:bg-white/5
                        transition
						text-white
									'
								>
									<FixedImage alt='game logo' className='w-8' src={game_icon} /> {game.title}
								</div>
							}
						/>
					)}

					<NavButton mobile={mobile} onNavigate={onNavigate} game={game.slug} id={0} href={`/${game.slug}/quests`}>
						<FixedImage src={nav_icons[0] || ""} alt={t("quests.quests")} className={mobile ? "w-8 h-8" : theme.menu.item()} />
						<span className={mobile ? "text-white text-lg" : theme.menu.label()}>{t("quests.quests")}</span>
					</NavButton>

					<NavButton mobile={mobile} onNavigate={onNavigate} game={game.slug} id={1} href={`/${game.slug}/collectibles`}>
						<FixedImage src={nav_icons[1] || ""} alt={t("collections.collectibles")} className={mobile ? "w-8 h-8" : theme.menu.item()} />
						<span className={mobile ? "text-white text-lg" : theme.menu.label()}>{t("collections.collectibles")}</span>
					</NavButton>
				</>
			) : (
				<>
					<NavButton mobile={mobile} onNavigate={onNavigate} game={game.slug} id={2} href={`/${game.slug}/map`}>
						<FixedImage src={nav_icons[2] || ""} alt={t("map.map")} className={mobile ? "w-8 h-8" : theme.menu.item()} />
						<span className={mobile ? "text-white text-lg" : theme.menu.label()}>{t("map.map")}</span>
					</NavButton>

					<NavButton mobile={mobile} onNavigate={onNavigate} game={game.slug} id={3} href={`/${game.slug}/achievements`}>
						<FixedImage src={nav_icons[3] || ""} alt={t("achievements.achievements")} className={mobile ? "w-8 h-8" : theme.menu.item()} />
						<span className={mobile ? "text-white text-lg" : theme.menu.label()}>{t("achievements.achievements")}</span>
					</NavButton>
				</>
			)}
		</div>
	);
}
