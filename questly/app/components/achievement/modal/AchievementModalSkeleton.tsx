export default function AchievementModalSkeleton() {
	return (
		<div className='w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] h-[calc(100dvh-1rem)] max-h-[calc(100dvh-1rem)] lg:max-h-none lg:min-h-150 lg:w-350 lg:max-w-none lg:h-220 flex flex-col border-2 border-[rgb(40,37,28)] bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-[0_0_40px_rgba(0,0,0,0.9)]'>
			<div className='flex items-center gap-3 px-4 py-3 border-b-2 border-[rgb(40,37,28)]'>
				<div className='w-10 h-10 shrink-0 animate-pulse bg-white/5' />
				<div className='h-5 w-40 animate-pulse bg-white/5' />
			</div>

			<div className='p-4 flex flex-col gap-2 flex-1'>
				<div className='h-4 w-full animate-pulse bg-white/5' />
				<div className='h-4 w-5/6 animate-pulse bg-white/5' />
				<div className='h-4 w-2/3 animate-pulse bg-white/5' />
			</div>

			<div className='flex items-center justify-end gap-2 p-3 border-t border-[#3a3a3a]'>
				<div className='h-8 w-24 animate-pulse bg-white/5' />
			</div>
		</div>
	);
}
