"use client";
import QuestLink from "@/app/components/quest-modal/parts/requirements/QuestLink";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { QuestFamily } from "@/app/types/quest";

type Props = {
	prev_quests?: QuestFamily[];
	game?: string;
};

export default function ModalPrevQuests({ prev_quests = [], game }: Props) {
	const theme = getTheme("questModal", game);
	const { default_icon } = useGameAssets();

	const hasPrevQuests = prev_quests.length > 0;

	if (!hasPrevQuests) {
		return null;
	}

	return (
		<section>
			<h3 className={theme.requirements.title()}>Previous Quests</h3>

			<ul className={theme.requirements.list()}>
				{prev_quests.map((quest) => (
					<li className='flex items-center gap-2' key={quest.uuid}>
						<span className={theme.requirements.marker()} />
						<QuestLink game={game} quest={quest} defaultIcon={default_icon} />
					</li>
				))}
			</ul>
		</section>
	);
}
