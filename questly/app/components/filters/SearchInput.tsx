"use client";

type Props = {
	value: string;
	onChange: (value: string) => void;
	theme: string;
};

export function SearchInput({ value, onChange, theme }: Props) {
	return (
		<div className='w-full pt-0.75 pb-0.75 bg-zinc-900 group'>
			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder='Search quests...'
				className='w-full bg-zinc-800 px-4 py-2 text-sm transition text-white outline-none focus:bg-zinc-900'
			/>

			<div
				className={`h-0.5 ${theme} border-b-2 transition mt-1.5 rounded-b-2xl 
                    group-focus-within:brightness-75 `}
			/>
		</div>
	);
}
