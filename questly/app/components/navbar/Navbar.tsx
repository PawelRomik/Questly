"use client";

import { NavDecor } from "./NavDecor";
import { NavMenu } from "./NavMenu";
import GameSwitcher from "@/app/components/game-switcher/GameSwitcher";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";

export default function Navbar() {
	const styles = navbarVariants["witcher3"];

	return (
		<nav className={styles.base()}>
			<div className={styles.leftSideWrapper()}>
				<NavDecor side='left' />
			</div>

			<div className={styles.content.base()}>
				<div className={styles.content.contentWrapper()}>
					<NavMenu side='left' />

					<GameSwitcher />

					<NavMenu side='right' />
				</div>
			</div>

			<NavDecor side='right' />
		</nav>
	);
}
