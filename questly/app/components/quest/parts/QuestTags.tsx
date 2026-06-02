import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { TagType } from "@/app/types/quest";

type Props = {
	tags: TagType[];
	search: string;
	searchTags: boolean;
	completed: boolean;
};

export function QuestTags({ tags, search, searchTags, completed }: Props) {
	const styles = useGameStyles(questVariants);
	const sortedTags = [...tags].sort((a, b) => {
		if (a.dlc && !b.dlc) return -1;
		if (!a.dlc && b.dlc) return 1;
		return 0;
	});
	return (
		<div className={styles.tags()}>
			{sortedTags.map((tag) => (
				<Tag key={tag.name} tag={tag} search={search} searchTags={searchTags} />
			))}

			{completed && <CompletedTag />}
		</div>
	);
}
