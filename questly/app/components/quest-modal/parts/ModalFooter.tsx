import { useNextQuest } from "@/app/hooks/useNextQuest";
import { ModalCompleteButton } from "./ModalCompleteButton";
import { ModalNextQuestButton } from "@/app/components/quest-modal/parts/ModalNextQuestButton";
import { getTheme } from "@/app/lib/utils/getTheme";
import { ModalRewards } from "@/app/components/quest-modal/parts/rewards/ModalRewards";
import { Quest } from "@/app/types/quest";

type Props = {
	uuid: string;
	game?: string;
	quest: Quest;
};

export function ModalFooter({ uuid, game, quest }: Props) {
	const { nextQuest } = useNextQuest(uuid);
	const theme = getTheme("questModal", game);
	const { rewards } = quest;

	return (
		<div className={theme.footer()}>
			{game && <ModalCompleteButton game={game} uuid={uuid} />}

			{rewards && <ModalRewards game={game} rewards={quest.rewards} />}

			{nextQuest ? <ModalNextQuestButton game={game} quest={nextQuest} /> : <div className='w-20'></div>}
		</div>
	);
}
