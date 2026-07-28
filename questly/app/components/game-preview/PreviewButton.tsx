"use client";

import { Game } from "@/app/(pages)/[locale]/page";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
	game: Game;
};

export default function PreviewButton({ game }: Props) {
	const theme = getTheme("preview", game.slug);
	const t = useTranslations("preview");

	return (
		<Link href={`/${game.slug}/quests`} className={theme.button.container()}>
			<button className={theme.button.base()}>{t("check")}</button>
		</Link>
	);
}
