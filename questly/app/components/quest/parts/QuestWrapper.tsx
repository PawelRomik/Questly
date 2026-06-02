"use client";

import { QuestContent } from "@/app/components/quest/parts/QuestContent";
import { QuestImage } from "@/app/components/quest/parts/QuestImage";
import { QuestButton } from "@/app/components/quest/parts/QuestButton";
import { useParams } from "next/navigation";
import { useCompleted } from "@/app/context/CompletedContext";
import { QuestDivider } from "@/app/components/quest/parts/QuestDivider";
import { QuestMeta } from "@/app/components/quest/parts/QuestMeta";
import { QuestAccent } from "@/app/components/quest/parts/QuestAccent";
import { QuestRewards } from "@/app/components/quest/parts/QuestRewards";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useFilters } from "@/app/context/FiltersContext";
import { Quest } from "@/app/types/quest";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import default_banner from "../../../../public/assets/banner.png";

type Props = {
	quest: Quest;
};

export default function QuestWrapper({ quest }: Props) {
	const { game } = useParams() as { game: string };
	const { isCompleted, toggle } = useCompleted(game, "quests");

	const styles = useGameStyles(questVariants);
	const { filters } = useFilters();
	const { searchTags, search } = filters;
	const { uuid, level, dlc, quest_type, title, description, tags, rewards, location } = quest;
	const completed = isCompleted(uuid);
	const shortDesc = description.slice(0, 60) + "...";
	const { default_icon } = useGameAssets();

	return (
		<div className={styles.wrapper.base(completed)}>
			<QuestAccent completed={completed} color={quest_type.color} />

			<QuestMeta level={level}>
				<QuestImage icon={quest_type?.icon?.url ?? default_icon} src={location?.banner?.url ?? default_banner} />
			</QuestMeta>

			<div className={styles.wrapper.content()}>
				<QuestContent title={title} level={level} dlc={dlc} shortDesc={shortDesc} tags={tags} completed={completed} search={search} searchTags={searchTags} />
			</div>

			<QuestRewards rewards={rewards} />

			<QuestDivider />

			<QuestButton
				completed={completed}
				onClick={(e) => {
					e.stopPropagation();
					toggle(uuid);
				}}
			/>
		</div>
	);
}
