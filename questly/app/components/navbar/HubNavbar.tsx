"use client";

import { useGameStyles } from "@/app/hooks/useGameStyles";

import GameSwitcher from "@/app/components/game-switcher/GameSwitcher";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";

export default function HubNavbar() {
	const styles = useGameStyles(navbarVariants);

	return (
		<nav className={styles.base()}>
			<div className={styles.content.base()}>
				<div className={styles.content.contentWrapper()}>
					<GameSwitcher />
				</div>
			</div>
		</nav>
	);
}
