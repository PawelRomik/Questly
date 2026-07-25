export default function PreviewButton() {
	return (
		<div className='flex-1 w-full'>
			<button
				className='
						h-full
						w-full
						border-t
						border-[#ff204e]
						bg-linear-to-b
						from-[#220812]
						to-[#07070c]
						text-[#f5f7ff]
						uppercase
						tracking-[0.3em]
						font-semibold
						transition-all
                        cursor-pointer
						duration-200
						hover:border-[#00e0ff]
						hover:from-[#111827]
						hover:to-[#05070c]
						hover:text-[#00e0ff]
						hover:shadow-[0_0_16px_rgba(255,32,78,0.14)]
					'
			>
				go
			</button>
		</div>
	);
}
