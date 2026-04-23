"use client";

import ProgressBar from "@/app/components/quest/ProgressBar";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { Collapsible } from "radix-ui";
import { useState } from "react";

type Props = {
	title: string;
	count: number;
	children: React.ReactNode;
	variant?: "location" | "type";
	completed?: number;
	icon?: string;
	level?: number;
};

export default function Section({ title, count, level = 0, icon, children, completed, variant = "type" }: Props) {
	const [open, setOpen] = useState(true);

	const indentStyle = {
		paddingLeft: `${level * 24}px`
	};

	return (
		<Collapsible.Root style={indentStyle} className='w-full' open={open} onOpenChange={setOpen}>
			<Collapsible.Trigger
				className={`
          w-full flex flex-col cursor-pointer transition-all px-4 py-3
          border border-[rgb(40,37,28)]
          bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
          shadow-[0_0_20px_rgba(0,0,0,0.7)] skew-x-5 hover:brightness-110
          
        `}
			>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center gap-3'>
						<ChevronUp
							className={`
                w-4 h-4 transition-transform duration-200 text-[#a68b5b]
                ${open ? "rotate-180" : ""}
              `}
						/>

						{icon && <Image unoptimized width={100} height={100} src={icon} className='h-8 w-8 object-cover  ' alt='location' />}

						<span className='text-[#e6d3a3] text-lg uppercase tracking-wide'>{title}</span>
					</div>

					<span className='text-xs text-[#a68b5b]'>
						{completed ?? 0} / {count}
					</span>
				</div>

				{completed !== undefined && (
					<div className='mt-3'>
						<ProgressBar completed={completed} total={count} />
					</div>
				)}
			</Collapsible.Trigger>

			<Collapsible.Content
				className={`
          overflow-hidden pt-3 transition-all duration-300
          ${open ? "animate-slideDown" : "animate-slideUp"}
        `}
			>
				<div
					className={`
            flex flex-col gap-3 pl-2
            
          `}
				>
					{children}
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
