"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

import { useGameStyles } from "@/app/hooks/useGameStyles";

import { NavMenu } from "./NavMenu";
import GameSwitcher from "@/app/components/switchers/GameSwitcher";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
import { motion } from "framer-motion";

export default function Navbar() {
	const styles = useGameStyles(navbarVariants);
	const [isOpen, setIsOpen] = useState(true);

	return (
		<motion.div
			className={styles.expandable()}
			animate={{
				height: isOpen ? "96px" : 0
			}}
			transition={{ duration: 0.3 }}
		>
			<nav className={styles.base(isOpen)}>
				<button onClick={() => setIsOpen((prev) => !prev)} className={styles.toggle()}>
					{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
				</button>

				<div className={styles.content.base()}>
					<div className={styles.content.contentWrapper()}>
						<NavMenu side='left' />

						<GameSwitcher />

						<NavMenu side='right' />
					</div>
				</div>
			</nav>
		</motion.div>
	);
}
