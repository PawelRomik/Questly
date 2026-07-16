"use client";

import Link from "next/link";
import NavLogo from "@/app/components/navbar/NavLogo";
import { useParams, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { switcherVariants } from "@/app/components/switchers/variant/switcherVariants";
import { useLocalizedList } from "@/app/hooks/useLocalizedList";
import { GET_GAMES } from "@/app/lib/queries";
import FixedImage from "@/app/components/common/FixedImage";

type GameType = {
	slug: string;
	title: string;
	logo: {
		url: string;
	};
};

type getGameVars = {
	locale: string;
};

export default function GameSwitcher() {
	const pathname = usePathname();
	const { game } = useParams();

	const currentSegments = pathname.split("/").filter(Boolean);
	const t = useTranslations("common");
	const locale = useLocale();

	const styles = useGameStyles(switcherVariants);

	const games = useLocalizedList<GameType, getGameVars>({
		query: GET_GAMES,
		vars: {
			locale
		},
		locale,
		getItems: (data) => data?.games ?? [],
		getId: (g) => g.slug
	});

	return (
		<SwitcherDialog trigger={<NavLogo />} title={t("selectGame")}>
			<div className={styles.switcher.grid()}>
				{games.map((g) => {
					let href = `/${g.slug}/quests`;

					if (currentSegments.length > 1) {
						const segments = [...currentSegments];

						segments[1] = g.slug;

						href = `/${segments.join("/")}`;
					}

					return (
						<Link key={g.slug} href={href} className={styles.switcher.link(g.slug === game)}>
							<div className={styles.switcher.item()}>
								<FixedImage src={g.logo.url} alt={g.title} className={styles.switcher.image()} />
							</div>

							<span className={styles.switcher.label()}>{g.title}</span>
						</Link>
					);
				})}
			</div>
		</SwitcherDialog>
	);
}
