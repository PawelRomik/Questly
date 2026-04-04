"use client";

import ProgressBar from "@/app/components/quest/ProgressBar";
import { ChevronUp } from "lucide-react";
import { Collapsible } from "radix-ui";
import { useState } from "react";

type Props = {
	title: string;
	count: number;
	children: React.ReactNode;
	variant?: "location" | "type";
	completed?: number;
};

export default function Section({ title, count, children, completed, variant = "type" }: Props) {
	const [open, setOpen] = useState(true);

	const triggerBase = "w-full flex items-center cursor-pointer justify-between transition-all rounded-xl px-3 py-2 border";

	const triggerStyle =
		variant === "location"
			? "bg-zinc-900 text-white text-lg font-bold border-zinc-700 hover:border-zinc-500"
			: "bg-zinc-800 text-zinc-200 text-sm border-zinc-700 hover:border-zinc-500";

	const contentWrapper = variant === "location" ? "flex flex-col gap-3 mt-3 pl-2 border-l border-zinc-800" : "flex flex-col gap-3 mt-3 pl-4";

	return (
		<Collapsible.Root open={open} onOpenChange={setOpen}>
			<Collapsible.Trigger className={`${triggerBase} ${triggerStyle}`}>
				<div className='flex items-center gap-2 '>
					<ChevronUp
						className={`
							"w-4 h-4 transition-transform duration-200",
							${open && "rotate-180"}
						`}
					/>
					<span>{title}</span>
				</div>

				<span className='text-xs text-zinc-400'>
					{completed ?? 0} / {count}
				</span>
			</Collapsible.Trigger>

			<Collapsible.Content className={`overflow-hidden transition-all duration-300 ${open ? "animate-slideDown" : "animate-slideUp"}`}>
				<div className={contentWrapper}>
					{completed !== undefined && <ProgressBar completed={completed} total={count} />}

					{children}
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
