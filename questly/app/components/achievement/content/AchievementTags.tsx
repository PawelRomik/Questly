import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { AchievementWithMatches } from "@/app/types/achievement";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

type Props = {
	achievement: AchievementWithMatches;
	searchTags: boolean;
	completed: boolean;
};

export function AchievementTags({ achievement, searchTags, completed }: Props) {
	const styles = useGameStyles(achievementVariants);
	const { tags, dlc, missable } = achievement;
	const { missable_color } = useGameAssets();

	return (
		<div className={styles.tags()}>
			{dlc && <Tag tag={dlc.title} type='dlc' match={achievement._dlcMatch} color={dlc.color} searchTags={searchTags} />}
			{missable && <Tag tag={"Missable"} type='missable' match={achievement._missableMatch} color={missable_color} searchTags={searchTags} />}
			{tags.map((tag) => (
				<Tag key={tag.name} match={tag.name === achievement._tagMatchValue ? achievement._tagMatchIndices : undefined} tag={tag.name} searchTags={searchTags} />
			))}

			{completed && <CompletedTag />}
		</div>
	);
}
