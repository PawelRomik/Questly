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
			className='sticky top-0 z-50'
			animate={{
				height: isOpen ? "100px" : 0
			}}
			transition={{ duration: 0.3 }}
		>
			<nav
				className={`
		top-0 left-0 right-0 z-50
		${styles.base()}
		transition-transform duration-300
		${isOpen ? "sticky translate-y-0" : "fixed -translate-y-full"}
	`}
			>
				<button
					onClick={() => setIsOpen((prev) => !prev)}
					className='absolute left-1/2 -bottom-5 z-50 flex -translate-x-1/2 items-center justify-center rounded-b-lg border border-t-0 bg-zinc-800 px-3 py-1 hover:bg-zinc-700 transition-colors'
				>
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
