"use client";

import { useState } from "react";
import { NavDecor } from "./NavDecor";
import { NavMenu } from "./NavMenu";
import NavLogo from "@/app/components/navbar/NavLogo";

export const NAV_BG = "bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)]";

export default function Navbar() {
	const [active, setActive] = useState<"left" | "right" | null>(null);

	return (
		<nav className='w-full sticky z-10 top-0 left-0 flex shadow-2xl text-2xl font-bold h-24'>
			<NavDecor side='left' active={active} />

			<div className={`flex-1 flex items-center border-b-4 border-white ${NAV_BG}`}>
				<div className='flex w-full h-full'>
					<NavMenu side='left' active={active} setActive={setActive} />

					<NavLogo />

					<NavMenu side='right' active={active} setActive={setActive} />
				</div>
			</div>

			<NavDecor side='right' active={active} />
		</nav>
	);
}
