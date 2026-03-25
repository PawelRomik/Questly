"use client";
import Image from "next/image";
import witcher from "../../../public/assets/witcher.png";
import cyberpunk from "../../../public/assets/cyberpunk.png";
import questly from "../../../public/assets/questly.png";
import { NAV_BG } from "@/app/components/navbar/Navbar";
import { usePathname } from "next/navigation";

export default function NavLogo() {
	const pathname = usePathname();

	let logo = questly;

	if (pathname.startsWith("/witcher3/quests")) {
		logo = witcher;
	} else if (pathname.startsWith("/cyberpunk2077/quests")) {
		logo = cyberpunk;
	}

	return (
		<div className={`flex-1 flex items-center p-2 group justify-center overflow-hidden cursor-pointer ${NAV_BG} hover:brightness-150`}>
			<Image src={logo} alt='witcher' className='h-full w-20 object-contain group-hover:scale-110 transition' />
		</div>
	);
}
