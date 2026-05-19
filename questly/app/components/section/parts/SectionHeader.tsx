import { ChevronUp } from "lucide-react";

import Image from "next/image";

import { motion } from "framer-motion";
import { sectionVariants } from "@/app/components/section/variant/sectionVariants";

type Props = {
	title: string;
	count: number;
	completed?: number;
	icon?: string;
	open: boolean;
};

export function SectionHeader({ title, count, completed, icon, open }: Props) {
	const styles = sectionVariants["witcher3"];
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

				{icon && <Image unoptimized width={100} height={100} src={icon} className={styles.section.header.icon()} alt='location' />}

				<span className={styles.section.header.title()}>{title}</span>
			</div>

			<span className={styles.section.header.count()}>
				{completed ?? 0} / {count}
			</span>
		</div>
	);
}
