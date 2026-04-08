"use client";

type Props = {
	value: string;
	onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: Props) {
	return (
		<input
			type='text'
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder='Search quests...'
			className='w-full bg-zinc-800 border border-zinc-700  px-4 py-2 text-sm text-white outline-none focus:border-red-600'
		/>
	);
}
