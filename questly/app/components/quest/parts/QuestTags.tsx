import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { QuestWithMatches } from "@/app/types/quest";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	quest: QuestWithMatches;
	searchTags: boolean;
	game?: string;
	completed: boolean;
};

export function QuestTags({ quest, searchTags, completed, game }: Props) {
	const { tags, dlc, missable } = quest;
	const { missable_color } = useGameAssets();
	const t = useTranslations("tags");
	const theme = getTheme("quest", game);

	return (
		<div className={theme.tags()}>
			{dlc && <Tag game={game} tag={dlc.title} type='dlc' match={quest._dlcMatch} color={dlc.color} searchTags={searchTags} />}
			{missable && <Tag game={game} tag={t("missable")} type='missable' match={quest._missableMatch} color={missable_color} searchTags={searchTags} />}
			{tags.map((tag) => (
				<Tag game={game} key={tag.name} match={tag.name === quest._tagMatchValue ? quest._tagMatchIndices : undefined} tag={tag.name} searchTags={searchTags} />
			))}

			{completed && <CompletedTag game={game} />}
		</div>
	);
}
