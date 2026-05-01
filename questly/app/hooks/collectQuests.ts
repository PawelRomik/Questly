import { GroupNode } from "@/app/components/quest/QuestTreeRenderer";
import { Quest } from "@/app/types/quest";

export default function collectQuests(node: GroupNode): Quest[] {
	if (node.items) return node.items;

	if (node.children) {
		return node.children.flatMap(collectQuests);
	}

	return [];
}
