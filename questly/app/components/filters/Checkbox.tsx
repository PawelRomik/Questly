"use client";

type Props = {
	label: string;
	checked: boolean;
	onChange: (value: boolean) => void;
};

export function Checkbox({ label, checked, onChange }: Props) {
	return (
		<label className='flex items-center gap-3 cursor-pointer text-zinc-300 text-sm'>
			<div className='relative group w-5 h-5'>
				<input type='checkbox' checked={checked} onChange={(e) => onChange(e.target.checked)} className='absolute inset-0 opacity-0 cursor-pointer peer' />

				<div className='w-full h-full flex items-center justify-center peer-checked:bg-white'>{checked && <div className='w-2.5 h-2.5 bg-black'></div>}</div>

				<div className='absolute inset-0 pointer-events-none transition-transform duration-200 group-hover:rotate-45'>
					<div className='absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-red-600'></div>
					<div className='absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-red-600'></div>
					<div className='absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-red-600'></div>
					<div className='absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-red-600'></div>
				</div>
			</div>

			{label}
		</label>
	);
}
