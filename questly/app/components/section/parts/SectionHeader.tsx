import { ChevronUp } from "lucide-react";

import { motion } from "framer-motion";
import FixedImage from "@/app/components/common/FixedImage";
import { StaticImageData } from "next/image";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	title: string;
	count: number;
	completed?: number;
	icon: string | StaticImageData;
	open: boolean;
	game?: string;
};

export function SectionHeader({ title, count, completed, icon, open, game }: Props) {
	const theme = getTheme("section", game);
	return (
		<div className={theme.section.header.base()}>
			<div className={theme.section.header.content()}>
				<motion.div
					animate={{
						rotate: open ? 180 : 0
					}}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20
					}}
				>
					<ChevronUp className={theme.section.header.chevron()} />
				</motion.div>

				{icon && <FixedImage src={icon} className={theme.section.header.icon()} alt='location' />}

				<span className={theme.section.header.title()}>{title}</span>
			</div>

			<span className={theme.section.header.count()}>
				{completed ?? 0} / {count}
			</span>
		</div>
	);
}
