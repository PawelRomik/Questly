"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import questly from "@/public/assets/logo.png";

import { NavMenu } from "./NavMenu";
import FixedImage from "@/app/components/common/FixedImage";
import { Game } from "@/app/types/quest";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: Game;
};

export default function MobileNavbar({ game }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const theme = getTheme("navbar", game.slug);

	return (
		<div className={theme.mobile.base()}>
			<nav className={theme.mobile.nav()}>
				<FixedImage alt='logo' className={theme.mobile.logo()} src={questly} />

				<button onClick={() => setIsOpen((prev) => !prev)} className={theme.mobile.toggle()}>
					{isOpen ? <X size={30} /> : <Menu size={30} />}
				</button>
			</nav>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
						className={theme.mobile.menu()}
					>
						<NavMenu side='left' game={game} mobile onNavigate={() => setIsOpen(false)} />

						<NavMenu side='right' game={game} mobile onNavigate={() => setIsOpen(false)} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
