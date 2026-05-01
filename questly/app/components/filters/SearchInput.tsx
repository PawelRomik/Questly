"use client";

type Props = {
	value: string;
	onChange: (value: string) => void;
	theme: string;
};

export function SearchInput({ value, onChange, theme }: Props) {
	return (
		<div
			className={`
        w-full relative
        border border-[rgb(40,37,28)]
        bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
        shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]
        group
      `}
		>
			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder='Search quests...'
				className='
          w-full px-4 py-2 text-sm
          bg-transparent
          text-[#e6d3a3]
          placeholder:text-[#6f6445]
          outline-none
          tracking-wide
        '
			/>

			<div
				className={`
          absolute bottom-0 left-0 w-full h-0.5
          ${theme}
          opacity-60
          transition-all duration-200
          group-focus-within:opacity-100
		  group-active-within:opacity-100
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
