"use client";

type Props = {
	label: string;
	checked: boolean;
	onChange: (value: boolean) => void;
};

export function Checkbox({ label, checked, onChange }: Props) {
	return (
		<label className='flex items-center gap-2 text-sm text-zinc-300 cursor-pointer'>
			<input type='checkbox' checked={checked} onChange={(e) => onChange(e.target.checked)} className='accent-red-600' />
			{label}
		</label>
	);
}
