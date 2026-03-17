"use client";

import { useState } from "react";
import Image from "next/image";
import witcher from "../../../public/assets/witcher.png";

export default function Navbar() {
	const [active, setActive] = useState<"left" | "right" | null>(null);

	return (
		<nav className='w-full sticky z-10 top-0 left-0 flex shadow-2xl text-2xl font-bold h-24'>
			<div className='w-32 h-full overflow-hidden'>
				<div
					className={`w-full h-full border-b-4 rotate-30 scale-x-150 origin-bottom-right bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)] transition-colors ${active === "left" && "brightness-150"}`}
				/>
			</div>

			<div className='flex-1 flex items-center border-b-4 border-white justify-center bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)]'>
				<div className='flex w-full h-full'>
					<div className='flex-3 flex items-center justify-around h-full text-white'>
						<button
							onMouseEnter={() => setActive("left")}
							onMouseLeave={() => setActive(null)}
							className={`border-r-4 border-zinc-900 uppercase px-5 w-full cursor-pointer h-full bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)] transition-colors ${active === "left" && "brightness-150"}`}
						>
							Quests
						</button>

						<button className='border-r-4 bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)] border-zinc-900 px-5 w-full h-full cursor-pointer uppercase hover:brightness-150'>
							Collectibles
						</button>
					</div>

					<div className='flex-1 flex items-center bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)] p-2 hover:brightness-150 group justify-center overflow-hidden cursor-pointer'>
						<Image src={witcher} alt='witcher' className='h-full object-contain  group-hover:scale-110 transition' />
					</div>

					<div className='flex-3 flex items-center  justify-around h-full text-white'>
						<button className='border-l-4  border-zinc-900 bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)] px-5 w-full h-full hover:brightness-150 cursor-pointer uppercase'>
							Map
						</button>

						<button
							onMouseEnter={() => setActive("right")}
							onMouseLeave={() => setActive(null)}
							className={`border-l-4 border-zinc-900 px-5 w-full h-full cursor-pointer bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)] transition-colors ${active === "right" && "brightness-150"}`}
						>
							...
						</button>
					</div>
				</div>
			</div>

			<div className='w-32 h-full overflow-hidden'>
				<div
					className={`w-full h-full border-b-4 -rotate-30 scale-x-150 origin-bottom-left transition-colors bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)] ${active === "right" && "brightness-150"}`}
				/>
			</div>
		</nav>
	);
}
