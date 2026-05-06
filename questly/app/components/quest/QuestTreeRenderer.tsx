import QuestItem from "@/app/components/quest/QuestItem";
import Section from "@/app/components/quest/Section";
import { useCompleted } from "@/app/context/CompletedContext";
import collectQuests from "@/app/hooks/collectQuests";

import { sortQuests } from "@/app/lib/utils/sortQuests";
import { Quest } from "@/app/types/quest";
import { useParams } from "next/navigation";

export type GroupNode = {
	title: string;
	items?: Quest[];
	children?: GroupNode[];
	icon?: string;
};

type QuestTreeRendererProps = {
	nodes: GroupNode[];
	level?: number;
	sort: string;
};

export default function QuestTreeRenderer({ nodes, level = 0, sort }: QuestTreeRendererProps) {
	const params = useParams();
	const game = params.game as string;
	const { isCompleted } = useCompleted(game, "quests");
	return nodes.map((node) => {
		const allQuests = collectQuests(node);

		const sorted = node.items ? sortQuests(node.items, sort, isCompleted) : [];

		const completedCount = allQuests.filter((q) => isCompleted(q.uuid)).length;

		return (
			<Section key={node.title + level} title={node.title} level={level} count={allQuests.length} completed={completedCount} icon={node.icon}>
				{node.children && (
					<QuestTreeRenderer
						nodes={node.children}
						level={level + 1}
						{...{
							sort
						}}
					/>
				)}

				{node.items && sorted.map((quest: Quest) => <QuestItem key={quest.uuid} quest={quest} />)}
			</Section>
		);
	});
}
