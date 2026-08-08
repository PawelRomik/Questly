import icon from "@/public/assets/logo.png";
import background from "@/public/assets/background.png";
import FixedImage from "@/app/components/common/FixedImage";
import { getTranslations } from "next-intl/server";

export default async function Loading() {
	const t = await getTranslations("common");
	return (
		<div className='flex zoomHeight flex-col overflow-hidden bg-black'>
			<main className='flex flex-1 items-center justify-center px-6' style={{ backgroundImage: `url(${background.src})` }}>
				<div className='w-full max-w-xl rounded-xl border border-white/10 bg-black/80 p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)]'>
					<div className='flex flex-col items-center text-center gap-6'>
						<FixedImage src={icon} alt='Questly' className='w-40 object-contain' />

						<div className='loader text-white'></div>
						<h2 className='text-white uppercase font-bold'>{t("loading")}</h2>
					</div>
				</div>
			</main>
		</div>
	);
}
