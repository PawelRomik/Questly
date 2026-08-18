import { getTheme } from "@/app/lib/utils/getTheme";
import { QuestFamily } from "@/app/types/quest";
import ModalNextQuests from "@/app/components/quest-modal/parts/requirements/ModalNextQuests";
import ModalRequirements from "@/app/components/quest-modal/parts/requirements/ModalRequirements";
import ModalPrevQuests from "@/app/components/quest-modal/parts/requirements/ModalPrevQuests";

type Requirement = {
	desc: string;
};

type Props = {
	requirements?: Requirement[];
	prev_quests?: QuestFamily[];
	next_quests?: QuestFamily[];
	game?: string;
};

export const ModalRequirementsContainer = ({ requirements = [], prev_quests = [], next_quests = [], game }: Props) => {
	const theme = getTheme("questModal", game);

	return (
		<div className={theme.requirements.base()}>
			<ModalRequirements requirements={requirements} game={game} />
			<ModalPrevQuests prev_quests={prev_quests} game={game} />
			<ModalNextQuests next_quests={next_quests} game={game} />
		</div>
	);
};
