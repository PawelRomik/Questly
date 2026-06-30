"use client";

import QuestItem from "@/app/components/quest/QuestItem";
import Section from "@/app/components/section/Section";
import { useCompleted } from "@/app/context/CompletedContext";
import collectQuests from "@/app/hooks/collectQuests";
import { sortQuests } from "@/app/lib/utils/sortQuests";
import { Quest } from "@/app/types/quest";
import { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import { useFilters } from "@/app/context/FiltersContext";

export type GroupNode = {
	title: string;
	items?: Quest[];
	children?: GroupNode[];
	icon: string | StaticImageData;
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
	const { filters } = useFilters();
	const { completed, missables } = filters;

	return nodes.map((node) => {
		const allQuests = collectQuests(node);

		const sorted = node.items ? sortQuests(node.items, sort, isCompleted, completed, missables) : [];

		const completedCount = allQuests.filter((q) => isCompleted(q.uuid)).length;

		return (
			<Section key={`${node.title}-${level}`} title={node.title} level={level} count={allQuests.length} completed={completedCount} icon={node.icon}>
				{node.children && <QuestTreeRenderer nodes={node.children} level={level + 1} sort={sort} />}

				{sorted.map((quest) => (
					<QuestItem key={quest.uuid} quest={quest} />
				))}
			</Section>
		);
	});
}
