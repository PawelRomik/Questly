"use client";

import { useParams } from "next/navigation";
import { GAME_THEME } from "@/app/data/games";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";

export default function NavLogo() {
	const params = useParams();
	const game = params.game as keyof typeof GAME_THEME;

	const theme = GAME_THEME[game] ?? GAME_THEME.default;

	const styles = useGameStyles(navbarVariants);

	const { game_icon } = useGameAssets();
	return (
		<div className={styles.logo.base()}>
			<FixedImage src={game_icon?.url || ""} alt={theme.name} className={styles.logo.image()} />
		</div>
	);
}
