"use client";

import { SortOption } from "./types";

type Props = {
	value: SortOption;
	onChange: (value: SortOption) => void;
};

export function SortSelect({ value, onChange }: Props) {
	return (
		<select value={value} onChange={(e) => onChange(e.target.value as SortOption)} className='bg-zinc-800 border border-zinc-700 text-sm px-3 py-1 rounded text-white'>
			<option value={SortOption.AZ}>Title A-Z</option>
			<option value={SortOption.ZA}>Title Z-A</option>
			<option value={SortOption.LEVEL_ASC}>Level ↑</option>
			<option value={SortOption.LEVEL_DESC}>Level ↓</option>
		</select>
	);
}
