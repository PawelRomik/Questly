"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Fuse from "fuse.js";

import { GET_GAMES } from "@/app/lib/queries";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { getTheme } from "@/app/lib/utils/getTheme";

import FixedImage from "@/app/components/common/FixedImage";
import SwitcherSearch from "@/app/components/switchers/SwitcherSearch";

import default_game_icon from "../../../public/assets/game_icon.png";

type GameType = {
	slug: string;
	title: string;
	logo: string;
};

type GetGameVars = {
	locale: string;
};

type Props = {
	game?: string;
};

export default function GameSwitcherContent({ game }: Props) {
	const pathname = usePathname();
	const locale = useLocale();

	const currentSegments = pathname.split("/").filter(Boolean);

	const [search, setSearch] = useState("");

	const theme = getTheme("switcher", game);

	const games = useLocalizedList<GameType, GetGameVars>({
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
		<>
			<SwitcherSearch game={game} search={search} setSearch={setSearch} />

			<div className={theme.switcher.grid()}>
				{filteredGames.map((g) => {
					const validContent = ["quests", "achievements", "collectibles", "map"];

					let href = `/${locale}/${g.slug}/quests`;

					const [, currentGame, currentContent] = currentSegments;

					if (currentGame) {
						const content = validContent.includes(currentContent) ? currentContent : "quests";

						href = `/${locale}/${g.slug}/${content}`;
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
		</>
	);
}
