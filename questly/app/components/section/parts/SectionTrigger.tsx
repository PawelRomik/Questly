import { Collapsible } from "radix-ui";

import { SectionAccent } from "./SectionAccent";

import { SectionProgress } from "./SectionProgress";
import { SectionHeader } from "@/app/components/section/parts/SectionHeader";
import { sectionVariants } from "@/app/components/section/variant/sectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { StaticImageData } from "next/image";

type Props = {
	title: string;
	count: number;
	completed?: number;
	icon: string | StaticImageData;
	open: boolean;
	children?: React.ReactNode;
};

export function SectionTrigger({ title, count, completed, icon, open, children }: Props) {
	const styles = useGameStyles(sectionVariants);
	return (
		<Collapsible.Trigger className={styles.section.trigger()}>
			<SectionAccent completed={completed} total={count} />

			<SectionHeader title={title} count={count} completed={completed} icon={icon} open={open} />

			{completed !== undefined && <SectionProgress completed={completed} total={count} />}

			{children}
		</Collapsible.Trigger>
	);
}
