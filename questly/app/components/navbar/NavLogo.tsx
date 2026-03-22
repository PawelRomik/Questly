import Image from "next/image";
import witcher from "../../../public/assets/witcher.png";
import { NAV_BG } from "@/app/components/navbar/Navbar";

export default function NavLogo() {
	return (
		<div className={`flex-1 flex items-center p-2 group justify-center overflow-hidden cursor-pointer ${NAV_BG} hover:brightness-150`}>
			<Image src={witcher} alt='witcher' className='h-full object-contain group-hover:scale-110 transition' />
		</div>
	);
}
