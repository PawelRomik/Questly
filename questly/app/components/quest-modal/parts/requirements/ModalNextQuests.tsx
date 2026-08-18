"use client";
import QuestLink from "@/app/components/quest-modal/parts/requirements/QuestLink";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { QuestFamily } from "@/app/types/quest";

type Props = {
	next_quests?: QuestFamily[];
	game?: string;
};

export default function ModalNextQuests({ next_quests = [], game }: Props) {
	const theme = getTheme("questModal", game);
	const { default_icon } = useGameAssets();

	const hasNextQuests = next_quests.length > 0;

	if (!hasNextQuests) {
		return null;
	}

	return (
		<section>
			<h3 className={theme.requirements.title()}>Next Quests</h3>

			<ul className={theme.requirements.list()}>
				{next_quests.map((quest) => (
					<li className='flex items-center gap-2' key={quest.uuid}>
						<span className={theme.requirements.marker()} />
						<QuestLink quest={quest} game={game} defaultIcon={default_icon} />
					</li>
				))}
			</ul>
		</section>
	);
}
