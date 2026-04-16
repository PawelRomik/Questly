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
};

export default function Section({ title, count, icon, children, completed, variant = "type" }: Props) {
	const [open, setOpen] = useState(true);

	const triggerBase = "w-full flex flex-col cursor-pointer transition-all px-3  pt-2 ";

	const triggerStyle = variant === "location" ? " text-white bg-zinc-800 text-lg font-bold " : "bg-zinc-800   text-zinc-200 text-sm";

	const contentWrapper = variant === "location" ? "pl-3  flex flex-col gap-3 " : "flex flex-col gap-3";

	return (
		<Collapsible.Root className='w-full' open={open} onOpenChange={setOpen}>
			<Collapsible.Trigger className={`${triggerBase} ${triggerStyle}`}>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center gap-2'>
						<ChevronUp className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
						{icon && <Image unoptimized width={1000} height={1000} src={icon} className={`h-8.5 w-8.5 object-cover`} alt='location' />}
						<span>{title}</span>
					</div>

					<span className='text-xs text-zinc-400'>
						{completed ?? 0} / {count}
					</span>
				</div>

				{completed !== undefined && (
					<div className='mt-2 -mx-3'>
						<ProgressBar completed={completed} total={count} />
					</div>
				)}
			</Collapsible.Trigger>

			<Collapsible.Content className={`overflow-hidden pt-3 transition-all duration-300 ${open ? "animate-slideDown" : "animate-slideUp"}`}>
				<div className={contentWrapper}>{children}</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
