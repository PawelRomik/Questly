import { motion } from "framer-motion";
import { Quest } from "@/app/types/quest";
import WitcherModal from "@/app/components/quest-modal/WitcherModal";
import { useFilters } from "@/app/context/FiltersContext";

const BASE_URL = "http://localhost:1337";

export default function QuestItem({
	quest,
	activeQuestId,
	setActiveQuestId,
	isCompleted,
	toggle
}: {
	quest: Quest;
	activeQuestId: string | null;
	setActiveQuestId: (id: string | null) => void;
	isCompleted: (id: string) => boolean;
	toggle: (id: string) => void;
}) {
	const { filters } = useFilters();
	const { search, searchTags } = filters;
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
			<WitcherModal
				uuid={quest.uuid}
				activeQuestId={activeQuestId}
				setActiveQuestId={setActiveQuestId}
				title={quest.title}
				type={quest.quest_type}
				desc={quest.description}
				level={quest.level}
				location={quest.location?.name}
				tags={quest.tags.map((t) => t.name)}
				rewards={quest.rewards}
				isCompleted={isCompleted(quest.uuid)}
				toggleCompleted={() => toggle(quest.uuid)}
				search={search}
				searchTags={searchTags}
				requirements={quest.requirement}
				locationImage={quest.location?.banner?.url ? `${BASE_URL}${quest.location.banner.url}` : ""}
				mapImage={quest.location?.minimap?.url ? `${BASE_URL}${quest.location.minimap.url}` : ""}
				characterImage={quest.character?.image?.url ? `${BASE_URL}${quest.character.image.url}` : ""}
			/>
		</motion.div>
	);
}
