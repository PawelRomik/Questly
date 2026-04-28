"use client";

import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

type Props = {
	groups: { title: string }[];
	onSelect: (title: string) => void;
	active: string | null;
};

export default function CollectionGroup({ groups, onSelect, active }: Props) {
	return (
		<div className={`w-full flex flex-wrap gap-3   ${ptSans.className}`}>
			{groups.map((g) => {
				const isActive = active === g.title;

				return (
					<button
						key={g.title}
						onClick={() => onSelect(g.title)}
						className={`
							relative px-4 cursor-pointer py-2 text-sm uppercase tracking-wide
							border transition-all duration-200
							shadow-[0_0_10px_rgba(0,0,0,0.7)]
							bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
							overflow-hidden
                            hover:brightness-125

							${
								isActive
									? "border-[#1f6b2b] text-[#9be3a7] scale-95 inset-shadow-[0_0_15px_rgba(0,255,100,0.2)]"
									: "border-[rgb(40,37,28)] text-[#e6d3a3] hover:scale-105 hover:border-[#c6a85a]"
							}
						`}
					>
						<div className='pointer-events-none absolute inset-y-0 left-0 w-6'>
							<div className={`absolute top-0 left-0 w-1 h-full ${isActive ? "bg-[#2fa34a]" : "bg-[#c6a85a]"} opacity-80`} />
							<div className={`absolute top-0 left-0 w-3 h-full ${isActive ? "bg-[#2fa34a]" : "bg-[#c6a85a]"} opacity-20 blur-md`} />
						</div>

						<span className='relative z-10'>{g.title}</span>

						<div className='absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_60%)] opacity-0 hover:opacity-100 transition pointer-events-none' />
					</button>
				);
			})}
		</div>
	);
}
