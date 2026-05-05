export default function CompletedTag() {
	return (
		<div className='flex gap-2 mt-2 flex-wrap'>
			<span
				className='
              text-[10px] uppercase tracking-wide px-2 py-1
              border border-[#1f6b2b]
              bg-linear-to-b from-[#0f2a14] to-[#07150a]
              text-[#b7f5c5]
              shadow-[inset_0_0_6px_rgba(0,255,100,0.1)]
            '
			>
				✔ Completed
			</span>
		</div>
	);
}
