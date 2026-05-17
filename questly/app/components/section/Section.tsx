"use client";

import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { Collapsible } from "radix-ui";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProgressBar from "@/app/components/section/ProgressBar";

type Props = {
	title: string;
	count: number;
	children: React.ReactNode;
	completed?: number;
	icon?: string;
	level?: number;
};

export default function Section({ title, count, level = 0, icon, children, completed }: Props) {
	const [open, setOpen] = useState(level === 0);

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
          shadow-[0_0_20px_rgba(0,0,0,0.7)] relative -skew-x-8 hover:brightness-110
          
        `}
			>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center gap-3'>
						<div className='pointer-events-none absolute inset-y-0 left-0 w-12'>
							<div style={{ backgroundColor: completed != count ? "#c97a00" : "#2fa34a" }} className='absolute top-0 left-0 w-1 h-full opacity-80' />
							<div style={{ backgroundColor: completed != count ? "#c97a00" : "#2fa34a" }} className='absolute top-0 left-0 w-3 h-full opacity-20 blur-lg' />
						</div>
						<motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
							<ChevronUp className='w-4 h-4 text-[#a68b5b]' />
						</motion.div>

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

			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						key='content'
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							height: { type: "spring", stiffness: 200, damping: 25, duration: 3 },
							opacity: { duration: 0.2 }
						}}
						className='overflow-hidden '
					>
						<motion.div
							initial='hidden'
							animate='visible'
							variants={{
								visible: {
									transition: { staggerChildren: 0.07 }
								}
							}}
							className='flex flex-col gap-3  pl-2 pt-4'
						>
							{children}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Collapsible.Root>
	);
}
