import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { QuestWithMatches } from "@/app/types/quest";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

type Props = {
	quest: QuestWithMatches;
	searchTags: boolean;
	completed: boolean;
};

export function QuestTags({ quest, searchTags, completed }: Props) {
	const styles = useGameStyles(questVariants);
	const { tags, dlc, missable } = quest;
	const { missable_color } = useGameAssets();

	return (
		<div className={styles.tags()}>
			{dlc && <Tag tag={dlc.title} type='dlc' match={quest._dlcMatch} color={dlc.color} searchTags={searchTags} />}
			{missable && <Tag tag={"Missable"} type='missable' match={quest._missableMatch} color={missable_color} searchTags={searchTags} />}
			{tags.map((tag) => (
				<Tag key={tag.name} match={tag.name === quest._tagMatchValue ? quest._tagMatchIndices : undefined} tag={tag.name} searchTags={searchTags} />
			))}

			{completed && <CompletedTag />}
		</div>
	);
}
