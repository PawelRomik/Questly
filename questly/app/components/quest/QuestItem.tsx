import { motion } from "framer-motion";
import { Quest } from "@/app/types/quest";
import QuestModal from "@/app/components/quest-modal/QuestModal";

export default function QuestItem({ quest }: { quest: Quest }) {
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
			<QuestModal quest={quest} />
		</motion.div>
	);
}
