import { getTheme } from "@/app/lib/utils/getTheme";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
	open: boolean;
	children: React.ReactNode;
	game?: string;
};

export function SectionContent({ open, children, game }: Props) {
	const theme = getTheme("section", game);
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
					className={theme.section.content.wrapper()}
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
						className={theme.section.content.base()}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
