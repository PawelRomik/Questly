"use client";

type Props = {
	completed: number;
	total: number;
};

export default function ProgressBar({ completed, total }: Props) {
	const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

	const isComplete = percent === 100;

	return (
		<div className='w-full mx-auto flex flex-col gap-1'>
			<div className='w-full h-2 bg-zinc-700  overflow-hidden  '>
				<div
					className={`h-full transition-all  duration-500 ${isComplete ? "bg-linear-to-r from-green-400 via-green-500 to-green-600" : "bg-linear-to-r from-red-500 to-red-600"}`}
					style={{ width: `${percent}%` }}
				/>
			</div>
		</div>
	);
}
