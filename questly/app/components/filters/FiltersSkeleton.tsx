"use client";

import { getTheme } from "@/app/lib/utils/getTheme";

export default function FiltersSkeleton() {
	const theme = getTheme("filter");

	return (
		<div className={`${theme.base()} `}>
			{/* Logo */}
			<div className={`${theme.header.base()}  border-b-0`}>
				<div className='h-24 w-48 mx-auto rounded ' />
			</div>

			{/* Search */}
			<div
				className={`${theme.inputWrapper.base()} bg-linear-to-r
from-[#111111]
to-[#050505] border-0`}
			>
				<div className='h-11 w-full rounded' />
			</div>

			{/* Filters */}
			<div
				className={`${theme.settings()} bg-linear-to-r
from-[#111111]
to-[#050505] border-0`}
			>
				<div className='grid grid-cols-3   gap-3 w-full'>
					{Array.from({ length: 9 }).map((_, i) => (
						<div key={i} className='flex items-center gap-3'>
							<div className='w-5 h-5 bg-white/3 rounded' />
							<div className='h-3 flex-1 bg-white/3 rounded' />
						</div>
					))}
				</div>

				<div className='flex flex-wrap gap-3 w-full mt-4'>
					<div className='h-10 w-36 bg-white/3 rounded' />
					<div className='h-10 w-40 bg-white/3 rounded' />
					<div className='h-10 w-32 bg-white/3 rounded' />
				</div>
			</div>

			{/* Statistics */}
			<div className='space-y-2'>
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						key={i}
						className='h-8 bg-linear-to-r
from-[#111111]
to-[#050505]  rounded'
					/>
				))}
			</div>

			{/* Locale switcher */}
			<div
				className='h-10 w-full bg-linear-to-r
from-[#111111]
to-[#050505] rounded'
			/>
		</div>
	);
}
