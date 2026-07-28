"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { NavMenu } from "./NavMenu";
import GameSwitcher from "@/app/components/switchers/GameSwitcher";
import { motion } from "framer-motion";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export default function Navbar({ game }: Props) {
	const [isOpen, setIsOpen] = useState(true);
	const theme = getTheme("navbar", game);

	return (
		<motion.div
			className={theme.expandable()}
			animate={{
				height: isOpen ? "96px" : 0
			}}
			transition={{ duration: 0.3 }}
		>
			<nav className={theme.base(isOpen)}>
				<button onClick={() => setIsOpen((prev) => !prev)} className={theme.toggle()}>
					{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
				</button>

				<div className={theme.content.base()}>
					<div className={theme.content.contentWrapper()}>
						<NavMenu game={game} side='left' />

						<GameSwitcher game={game} />

						<NavMenu game={game} side='right' />
					</div>
				</div>
			</nav>
		</motion.div>
	);
}
