import { useNextQuest } from "@/app/hooks/useNextQuest";
import { ModalCompleteButton } from "./ModalCompleteButton";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { ModalNextQuestButton } from "@/app/components/quest-modal/parts/ModalNextQuestButton";

type Props = {
	uuid: string;
};

export function ModalFooter({ uuid }: Props) {
	const { nextQuest } = useNextQuest(uuid);
	const styles = questModalVariants["witcher3"];

	return (
		<div className={styles.footer()}>
			<ModalCompleteButton uuid={uuid} />

			{nextQuest && <ModalNextQuestButton quest={nextQuest} />}
		</div>
	);
}
