import { sectionVariants } from "@/app/components/section/variant/sectionVariants";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
	open: boolean;
	children: React.ReactNode;
};

export function SectionContent({ open, children }: Props) {
	const styles = sectionVariants["witcher3"];
	return (
		<AnimatePresence initial={false}>
			{open && (
				<motion.div
					key='content'
					initial={{
						height: 0,
						opacity: 0
					}}
					animate={{
						height: "auto",
						opacity: 1
					}}
					exit={{
						height: 0,
						opacity: 0
					}}
					transition={{
						height: {
							type: "spring",
							stiffness: 200,
							damping: 25,
							duration: 3
						},
						opacity: {
							duration: 0.2
						}
					}}
					className={styles.section.content.wrapper()}
				>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.07
								}
							}
						}}
						className={styles.section.content.base()}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
