"use client";

import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/app/components/navbar/NavLogo";
import { GAME_THEME } from "@/app/data/games";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { switcherVariants } from "@/app/components/switchers/variant/switcherVariants";

export default function GameSwitcher() {
	const games = Object.values(GAME_THEME);

	const pathname = usePathname();
	const { game } = useParams();

	const currentSegments = pathname.split("/").filter(Boolean);
	const t = useTranslations("common");

	const styles = useGameStyles(switcherVariants);

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
								<Image src={g.logo} alt={g.name} fill className={styles.switcher.image()} />
							</div>

							<span className={styles.switcher.label()}>{g.name}</span>
						</Link>
					);
				})}
			</div>
		</SwitcherDialog>
	);
}
