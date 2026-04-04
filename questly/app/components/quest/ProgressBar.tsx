"use client";

type Props = {
	completed: number;
	total: number;
};

export default function ProgressBar({ completed, total }: Props) {
	const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

	const isComplete = percent === 100;

	return (
		<div className='w-full max-w-xl mx-auto flex flex-col gap-1'>
			<div className='w-full h-3 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700'>
				<div
					className={`h-full transition-all shadow-[0_0_12px_rgba(255,255,255,0.8)] duration-500 ${isComplete ? "bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600" : "bg-linear-to-r from-red-500 to-red-600"}`}
					style={{ width: `${percent}%` }}
				/>
			</div>
		</div>
	);
}
