"use client";

import { useGameStyles } from "@/app/hooks/useGameStyles";

import { NavMenu } from "./NavMenu";
import GameSwitcher from "@/app/components/game-switcher/GameSwitcher";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";

export default function Navbar() {
	const styles = useGameStyles(navbarVariants);

	return (
		<nav className={styles.base()}>
			<div className={styles.content.base()}>
				<div className={styles.content.contentWrapper()}>
					<NavMenu side='left' />

					<GameSwitcher />

					<NavMenu side='right' />
				</div>
			</div>
		</nav>
	);
}
