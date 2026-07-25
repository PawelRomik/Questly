import FixedImage from "@/app/components/common/FixedImage";

export default function PreviewBanner() {
	return (
		<div
			className='
					relative
					flex-4
					flex
					items-center
					justify-center
					bg-cover
					bg-center
				'
			style={{
				backgroundImage: "url('https://pub-fa0dafb9f3744deaa727b46a0d011b83.r2.dev/cyberpunk2077/backgrounds/nightcity.jpeg')"
			}}
		>
			<div className='absolute inset-0 bg-black/60' />

			<div className='relative z-10 flex flex-col items-center justify-center gap-5'>
				<FixedImage src='cyberpunk2077/ui/switcher.png' className='h-[120px] w-auto drop-shadow-[0_0_18px_rgba(0,224,255,0.5)]' alt='icon' />

				<h2
					className='
							text-4xl
							font-bold
							uppercase
							tracking-widest
							text-[#f5f7ff]
							drop-shadow-[0_0_12px_rgba(0,224,255,0.45)]
						'
				>
					Cyberpunk 2077
				</h2>
			</div>
		</div>
	);
}
