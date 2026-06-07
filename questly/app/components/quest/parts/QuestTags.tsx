import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { Quest } from "@/app/types/quest";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

type Props = {
	quest: Quest;
	search: string;
	searchTags: boolean;
	completed: boolean;
};

export function QuestTags({ quest, search, searchTags, completed }: Props) {
	const styles = useGameStyles(questVariants);
	const { tags, dlc, missable } = quest;
	const { missable_color } = useGameAssets();

	return (
		<div className={styles.tags()}>
			{dlc && <Tag tag={dlc.title} type='dlc' color={dlc.color} search={search} searchTags={searchTags} />}
			{missable && <Tag tag={"Missable"} type='missable' color={missable_color} search={search} searchTags={searchTags} />}
			{tags.map((tag) => (
				<Tag key={tag.name} tag={tag.name} search={search} searchTags={searchTags} />
			))}

			{completed && <CompletedTag />}
		</div>
	);
}
