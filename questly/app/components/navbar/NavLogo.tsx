"use client";

import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";

export default function NavLogo() {
	const styles = useGameStyles(navbarVariants);

	const { game_icon } = useGameAssets();

	return (
		<div className={styles.logo.base()}>
			<FixedImage src={game_icon} alt={"logo"} className={styles.logo.image()} />
		</div>
	);
}
