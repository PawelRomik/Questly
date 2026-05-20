"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { GAME_THEME } from "@/app/data/games";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";

export default function NavLogo() {
	const params = useParams();
	const game = params.game as keyof typeof GAME_THEME;

	const theme = GAME_THEME[game] ?? GAME_THEME.default;

	const styles = navbarVariants["witcher3"];

	return (
		<div className={styles.logo.base()}>
			<Image src={theme.logo} alt={theme.name} className={styles.logo.image()} />
		</div>
	);
}
