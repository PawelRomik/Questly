"use client";

import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export default function NavLogo({ game }: Props) {
	const { game_icon } = useGameAssets();
	const t = useTranslations("common");
	const theme = getTheme("navbar", game);

	return (
		<div className={theme.logo.base()}>
			<FixedImage src={game_icon} alt={t("logo")} className={theme.logo.image()} />
		</div>
	);
}
