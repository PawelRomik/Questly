"use client";
import HubNavbar from "@/app/components/navbar/HubNavbar";
import FixedImage from "@/app/components/common/FixedImage";

import background from "@/public/assets/background.png";
import icon from "@/public/assets/game_icon.png";
import { useTranslations } from "next-intl";

export default function Error() {
	const t = useTranslations("error");
	return (
		<div className='flex h-screen flex-col overflow-hidden'>
			<HubNavbar game='questly' />

			<main className='flex flex-1 items-center justify-center px-6' style={{ backgroundImage: `url(${background.src})` }}>
				<div className='w-full max-w-xl rounded-xl border border-white/10 bg-black/80 p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)]'>
					<div className='flex flex-col items-center text-center'>
						<FixedImage src={icon} alt='Questly' className='mb-8 h-24 w-24 object-contain' />

						<span className='mb-2 text-sm uppercase tracking-[0.4em] text-white/40'>{t("error")}</span>

						<h1 className='text-4xl font-bold uppercase tracking-wider text-white'>{t("serverDown")}</h1>

						<p className='mt-5 max-w-md leading-7 text-white/60'>{t("serverDownDesc")}</p>

						<button
							onClick={() => window.location.reload()}
							className='mt-10 cursor-pointer rounded-md border border-white/15 bg-white/5 px-8 py-3 font-semibold uppercase tracking-[0.25em] text-white transition-all duration-200 hover:border-gray-400 hover:bg-gray-400/20'
						>
							{t("tryAgain")}
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
