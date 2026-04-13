"use client";

import { SortOption } from "./types";

type Props = {
	value: SortOption;
	onChange: (value: SortOption) => void;
};

export function SortSelect({ value, onChange }: Props) {
	return (
		<div className='pt-0.75 pb-0.75 bg-zinc-900 group w-fit'>
			<select
				value={value}
				onChange={(e) => onChange(e.target.value as SortOption)}
				className='bg-zinc-800 border-red-600 border-x-2 px-4 py-2 text-sm text-white outline-none transition 
                   focus:bg-zinc-900 appearance-none cursor-pointer'
			>
				<option value={SortOption.AZ}>Title A-Z</option>
				<option value={SortOption.ZA}>Title Z-A</option>
				<option value={SortOption.LEVEL_ASC}>Level ↑</option>
				<option value={SortOption.LEVEL_DESC}>Level ↓</option>
			</select>
		</div>
	);
}
