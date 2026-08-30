"use client";

import { useEffect, useState } from "react";

import { Collapsible } from "radix-ui";
import { SectionTrigger } from "@/app/components/section/parts/SectionTrigger";
import { SectionContent } from "@/app/components/section/parts/SectionContent";
import { StaticImageData } from "next/image";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useSectionExpand } from "@/app/context/SectionExpandContext";

type Props = {
	title: string;
	count: number;
	children: React.ReactNode;
	variant?: "location" | "type";
	completed?: number;
	icon: string | StaticImageData;
	level?: number;
	game?: string;
};

export default function Section({ title, count, level = 0, icon, children, completed, game }: Props) {
	const [open, setOpen] = useState(true);
	const theme = getTheme("section", game);
	const sectionExpand = useSectionExpand();
	const command = sectionExpand?.command ?? null;

	// Reaguje tylko na ZMIANĘ komendy (version), nie na każdy render - dzięki
	// temu to jednorazowe nadpisanie stanu, a nie stała kontrola z zewnątrz.
	useEffect(() => {
		if (command) {
			setOpen(command.open);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [command?.version]);

	const indentStyle = {
		paddingLeft: `${level * 24}px`
	};

	return (
		<Collapsible.Root style={indentStyle} className={`${theme.section.root()} max-md:pl-0!`} open={open} onOpenChange={setOpen}>
			<SectionTrigger game={game} title={title} count={count} completed={completed} icon={icon} open={open} />

			<SectionContent game={game} open={open}>
				{children}
			</SectionContent>
		</Collapsible.Root>
	);
}
