"use client";

import { QuestContent } from "@/app/components/quest/parts/QuestContent";
import { QuestImage } from "@/app/components/quest/parts/QuestImage";
import { QuestButton } from "@/app/components/quest/parts/QuestButton";
import { useCompleted } from "@/app/context/CompletedContext";
import { QuestDivider } from "@/app/components/quest/parts/QuestDivider";
import { QuestMeta } from "@/app/components/quest/parts/QuestMeta";
import { QuestAccent } from "@/app/components/quest/parts/QuestAccent";
import { QuestRewards } from "@/app/components/quest/parts/QuestRewards";
import { useFilters } from "@/app/context/FiltersContext";
import { Quest } from "@/app/types/quest";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import default_banner from "../../../../public/assets/banner.png";
import { getTheme } from "@/app/lib/utils/getTheme";
import { QuestTags } from "@/app/components/quest/parts/QuestTags";

type Props = {
	quest: Quest;
	game: string;
};

export default function QuestWrapper({ quest, game }: Props) {
	const { isCompleted, toggle } = useCompleted(game, "quests");

	const { filters } = useFilters();
	const { searchTags } = filters;
	const { uuid, level, quest_type, rewards, location } = quest;
	const completed = isCompleted(uuid);

	const { default_icon } = useGameAssets();
	const theme = getTheme("quest", game);

	return (
		<div className={theme.wrapper.base(completed)}>
			<QuestAccent game={game} completed={completed} color={quest_type.color} />

			<QuestMeta game={game} level={level}>
				<QuestImage game={game} icon={quest_type?.icon ?? default_icon} src={location?.banner ?? default_banner} />
			</QuestMeta>

			<div className={theme.wrapper.content()}>
				<QuestContent game={game} quest={quest} completed={completed} searchTags={searchTags} />
				<div className='lg:block hidden'>
					<QuestTags game={game} quest={quest} searchTags={searchTags} completed={completed} />
				</div>
			</div>
			<div className='lg:hidden col-start-1 col-span-3 row-start-4'>
				<QuestTags game={game} quest={quest} searchTags={searchTags} completed={completed} />
			</div>

			<QuestRewards game={game} rewards={rewards} />

			<QuestDivider game={game} />

			<QuestButton
				game={game}
				completed={completed}
				onClick={(e) => {
					e.stopPropagation();
					toggle(uuid);
				}}
			/>
		</div>
	);
}
