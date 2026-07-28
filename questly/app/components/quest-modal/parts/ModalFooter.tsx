import { useNextQuest } from "@/app/hooks/useNextQuest";
import { ModalCompleteButton } from "./ModalCompleteButton";
import { ModalNextQuestButton } from "@/app/components/quest-modal/parts/ModalNextQuestButton";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	uuid: string;
	game?: string;
};

export function ModalFooter({ uuid, game }: Props) {
	const { nextQuest } = useNextQuest(uuid);
	const theme = getTheme("questModal", game);

	return (
		<div className={theme.footer()}>
			{game && <ModalCompleteButton game={game} uuid={uuid} />}

			{nextQuest && <ModalNextQuestButton game={game} quest={nextQuest} />}
		</div>
	);
}
