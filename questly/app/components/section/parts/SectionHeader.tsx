import { ChevronUp } from "lucide-react";

import { motion } from "framer-motion";
import { sectionVariants } from "@/app/components/section/variant/sectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import FixedImage from "@/app/components/common/FixedImage";

type Props = {
	title: string;
	count: number;
	completed?: number;
	icon?: string;
	open: boolean;
};

export function SectionHeader({ title, count, completed, icon, open }: Props) {
	const styles = useGameStyles(sectionVariants);
	return (
		<div className={styles.section.header.base()}>
			<div className={styles.section.header.content()}>
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
					<ChevronUp className={styles.section.header.chevron()} />
				</motion.div>

				{icon && <FixedImage src={icon} className={styles.section.header.icon()} alt='location' />}

				<span className={styles.section.header.title()}>{title}</span>
			</div>

			<span className={styles.section.header.count()}>
				{completed ?? 0} / {count}
			</span>
		</div>
	);
}
