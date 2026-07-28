import { Collapsible } from "radix-ui";

import { SectionAccent } from "./SectionAccent";

import { SectionProgress } from "./SectionProgress";
import { SectionHeader } from "@/app/components/section/parts/SectionHeader";
import { StaticImageData } from "next/image";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	title: string;
	count: number;
	completed?: number;
	icon: string | StaticImageData;
	open: boolean;
	children?: React.ReactNode;
	game?: string;
};

export function SectionTrigger({ title, count, completed, icon, open, children, game }: Props) {
	const theme = getTheme("section", game);
	return (
		<Collapsible.Trigger className={theme.section.trigger()}>
			<SectionAccent game={game} completed={completed} total={count} />

			<SectionHeader game={game} title={title} count={count} completed={completed} icon={icon} open={open} />

			{completed !== undefined && <SectionProgress game={game} completed={completed} total={count} />}

			{children}
		</Collapsible.Trigger>
	);
}
