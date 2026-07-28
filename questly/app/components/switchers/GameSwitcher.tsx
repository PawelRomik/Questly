"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import NavLogo from "@/app/components/navbar/NavLogo";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { GET_GAMES } from "@/app/lib/queries";
import FixedImage from "@/app/components/common/FixedImage";
import Fuse from "fuse.js";
import SwitcherSearch from "@/app/components/switchers/SwitcherSearch";
import { getTheme } from "@/app/lib/utils/getTheme";
import default_game_icon from "../../../public/assets/game_icon.png";

type GameType = {
	slug: string;
	title: string;
	logo: string;
};

type getGameVars = {
	locale: string;
};

type Props = {
	game?: string;
};

export default function GameSwitcher({ game }: Props) {
	const pathname = usePathname();

	const currentSegments = pathname.split("/").filter(Boolean);
	const t = useTranslations("switchers");
	const locale = useLocale();

	const [search, setSearch] = useState("");

	const theme = getTheme("switcher", game);

	const games = useLocalizedList<GameType, getGameVars>({
		query: GET_GAMES,
		vars: {
			locale
		},
		locale,
		getItems: (data) => data?.games ?? [],
		getId: (g) => g.slug
	});

	const fuse = useMemo(
		() =>
			new Fuse(games, {
				keys: ["title"],
				threshold: 0.35,
				ignoreLocation: true,
				minMatchCharLength: 1
			}),
		[games]
	);

	const filteredGames = useMemo(() => {
		const query = search.trim();

		if (!query) return games;

		const results = fuse.search(query).map((result) => result.item);

		return results.length > 0 ? results : games;
	}, [games, fuse, search]);

	return (
		<SwitcherDialog game={game} trigger={<NavLogo game={game} />} title={t("selectGame")}>
			<SwitcherSearch game={game} search={search} setSearch={setSearch} />

			<div className={theme.switcher.grid()}>
				{filteredGames.map((g) => {
					let href = `/${g.slug}/quests`;

					if (currentSegments.length > 1) {
						const segments = [...currentSegments];

						segments[1] = g.slug;

						href = `/${segments.join("/")}`;
					}

					return (
						<Link key={g.slug} href={href} className={theme.switcher.link(g.slug === game)}>
							<div className={theme.switcher.item()}>
								<FixedImage src={g.logo || default_game_icon} alt={g.title} className={theme.switcher.image()} />
							</div>

							<span className={theme.switcher.label()}>{g.title}</span>
						</Link>
					);
				})}
			</div>
		</SwitcherDialog>
	);
}
