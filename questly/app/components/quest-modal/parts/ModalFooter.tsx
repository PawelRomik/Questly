import { ModalCompleteButton } from "./ModalCompleteButton";
import { getTheme } from "@/app/lib/utils/getTheme";
import { ModalRewards } from "@/app/components/quest-modal/parts/rewards/ModalRewards";
import { Quest } from "@/app/types/quest";

type Props = {
	uuid: string;
	game?: string;
	quest: Quest;
};

export function ModalFooter({ uuid, game, quest }: Props) {
	const theme = getTheme("questModal", game);
	const { rewards } = quest;

	return (
		<div className={theme.footer()}>
			{game && <ModalCompleteButton game={game} uuid={uuid} />}

			{rewards && <ModalRewards game={game} rewards={quest.rewards} />}
		</div>
	);
}
