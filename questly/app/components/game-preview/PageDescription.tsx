import FixedImage from "@/app/components/common/FixedImage";
import { FaGithub } from "react-icons/fa6";
import logo from "../../../public/assets/logo.png";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function PageDescription() {
	const t = await getTranslations("preview");
	return (
		<div
			className='p-3 flex-2 text-white   bg-linear-to-b
  from-[#151515]
  to-[#090909] flex flex-col items-center justify-center w-full border-2 border-white'
		>
			<FixedImage src={logo} className='h-50 mx-auto w-auto' alt='logo' />
			<div className='flex-1 flex flex-col px-5 items-center pt-5 gap-10'>
				<p className='text-xl text-center '>{t("descOne")}</p>
				<p className='text-xl  text-center'>{t("descTwo")}</p>
			</div>
			<Link href='https://github.com/PawelRomik/Questly' target='_blank' rel='noopener noreferrer' aria-label='Questly GitHub Repository'>
				<FaGithub className='w-12 h-12 mb-6 text-2xl hover:brightness-150 hover:scale-105 text-white transition duration-200 hover:opacity-80' />
			</Link>
		</div>
	);
}
