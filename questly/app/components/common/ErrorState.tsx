"use client";

import { FallbackProps } from "react-error-boundary";
import FixedImage from "@/app/components/common/FixedImage";
import icon from "@/public/assets/game_icon.png";
import { useTranslations } from "next-intl";

type Props = FallbackProps & {
	hideBackground?: boolean;
};

export default function ErrorState({ hideBackground, resetErrorBoundary }: Props) {
	const t = useTranslations("error");
	return (
		<div className='flex min-h-80 items-center justify-center px-6'>
			<div className={`w-full max-w-lg rounded-xl  ${!hideBackground && "border-white/10 border bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)]"} p-8 `}>
				<div className='flex flex-col items-center text-center'>
					<FixedImage src={icon} alt='Questly' className='mb-6 h-20 w-20 object-contain' />

					<span className='mb-2 text-sm uppercase tracking-[0.4em] text-white/40'>Questly</span>

					<h2 className='text-2xl font-bold uppercase tracking-wider text-white'>{t("badData")}</h2>

					<p className='mt-4 leading-7 text-white/60'>{t("badDataDesc")}</p>

					<button
						onClick={resetErrorBoundary}
						className='mt-8 cursor-pointer rounded-md border border-white/15 bg-white/5 px-6 py-3 font-semibold uppercase tracking-[0.25em] text-white transition-all duration-200 hover:border-gray-400 hover:bg-gray-400/20'
					>
						{t("tryAgain")}
					</button>
				</div>
			</div>
		</div>
	);
}
