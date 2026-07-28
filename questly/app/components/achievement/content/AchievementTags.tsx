"use client";
import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { AchievementWithMatches } from "@/app/types/achievement";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	achievement: AchievementWithMatches;
	searchTags: boolean;
	completed: boolean;
	game?: string;
};

export function AchievementTags({ achievement, searchTags, completed, game }: Props) {
	const { tags, dlc, missable } = achievement;
	const { missable_color } = useGameAssets();
	const t = useTranslations("tags");
	const theme = getTheme("achievement", game);

	return (
		<div className={theme.tags()}>
			{dlc && <Tag game={game} tag={dlc.title} type='dlc' match={achievement._dlcMatch} color={dlc.color} searchTags={searchTags} />}
			{missable && <Tag game={game} tag={t("missable")} type='missable' match={achievement._missableMatch} color={missable_color} searchTags={searchTags} />}
			{tags.map((tag) => (
				<Tag game={game} key={tag.name} match={tag.name === achievement._tagMatchValue ? achievement._tagMatchIndices : undefined} tag={tag.name} searchTags={searchTags} />
			))}

			{completed && <CompletedTag game={game} />}
		</div>
	);
}
