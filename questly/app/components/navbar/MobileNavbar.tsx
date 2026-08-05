"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import questly from "@/public/assets/logo.png";

import { NavMenu } from "./NavMenu";
import FixedImage from "@/app/components/common/FixedImage";
import { Game } from "@/app/types/quest";

type Props = {
	game: Game;
};

export default function MobileNavbar({ game }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='sticky top-0 z-30'>
			<nav className='relative h-16 bg-black/90 backdrop-blur border-b border-white/10 flex items-center justify-center px-4'>
				<button onClick={() => setIsOpen((prev) => !prev)} className='absolute left-4 text-white'>
					{isOpen ? <X size={30} /> : <Menu size={30} />}
				</button>

				<FixedImage alt='logo' className='h-full w-auto py-2' src={questly} />
			</nav>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
						className='overflow-hidden bg-black/95 border-b border-white/10'
					>
						<NavMenu side='left' game={game} mobile onNavigate={() => setIsOpen(false)} />

						<NavMenu side='right' game={game} mobile onNavigate={() => setIsOpen(false)} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
