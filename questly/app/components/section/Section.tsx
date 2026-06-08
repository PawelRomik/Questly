"use client";

import { useState } from "react";

import { Collapsible } from "radix-ui";
import { SectionTrigger } from "@/app/components/section/parts/SectionTrigger";
import { SectionContent } from "@/app/components/section/parts/SectionContent";
import { sectionVariants } from "@/app/components/section/variant/sectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { StaticImageData } from "next/image";

type Props = {
	title: string;
	count: number;
	children: React.ReactNode;
	variant?: "location" | "type";
	completed?: number;
	icon: string | StaticImageData;
	level?: number;
};

export default function Section({ title, count, level = 0, icon, children, completed }: Props) {
	const [open, setOpen] = useState(true);
	const styles = useGameStyles(sectionVariants);

	const indentStyle = {
		paddingLeft: `${level * 24}px`
	};

	return (
		<Collapsible.Root style={indentStyle} className={styles.section.root()} open={open} onOpenChange={setOpen}>
			<SectionTrigger title={title} count={count} completed={completed} icon={icon} open={open} />

			<SectionContent open={open}>{children}</SectionContent>
		</Collapsible.Root>
	);
}
