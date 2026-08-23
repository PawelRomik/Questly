import { motion } from "framer-motion";
import { Quest } from "@/app/types/quest";
import QuestTrigger from "@/app/components/quest/QuestTrigger";

export default function QuestItem({ quest, game }: { quest: Quest; game: string }) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: -5 },
				visible: { opacity: 1, y: 0 }
			}}
			transition={{ type: "spring", stiffness: 300, damping: 25 }}
			whileTap={{ scale: 0.97 }}
			layout
		>
			<QuestTrigger game={game} quest={quest} />
		</motion.div>
	);
}
