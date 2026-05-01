"use client";

import { SortOption } from "./types";

type Props = {
	value: SortOption;
	onChange: (value: SortOption) => void;
	theme: string;
};

export function SortSelect({ value, onChange, theme }: Props) {
	return (
		<div
			className={`
        relative w-fit
        border border-[rgb(40,37,28)]
        bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
        shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]
        group
      `}
		>
			<select
				value={value}
				onChange={(e) => onChange(e.target.value as SortOption)}
				className={`
    appearance-none cursor-pointer
    px-4 pr-10 py-2 text-sm
    bg-transparent
    text-[#e6d3a3]
    outline-none
    tracking-wide

    focus:bg-[#0f0f0f]
  `}
			>
				<option value={SortOption.AZ}>Title A-Z</option>
				<option value={SortOption.ZA}>Title Z-A</option>
				<option value={SortOption.LEVEL_ASC}>Level ↑</option>
				<option value={SortOption.LEVEL_DESC}>Level ↓</option>
			</select>

			<div
				className='
          pointer-events-none
          absolute right-3 top-1/2 -translate-y-1/2
          text-[#a68b5b]
          text-xs
        '
			>
				▼
			</div>

			<div
				className={`
          absolute bottom-0 left-0 w-full h-0.5
          ${theme}
          opacity-60
          transition-all duration-200
          group-focus-within:opacity-100
          group-focus-within:brightness-125
        `}
			/>

			<div
				className='
    pointer-events-none absolute inset-0
    opacity-0 
    group-hover:opacity-100
    group-focus-within:opacity-100
    transition
    bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_70%)]
  '
			/>
		</div>
	);
}
