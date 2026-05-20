import Link from "next/link";

import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import FixedImage from "@/app/components/common/FixedImage";

type Props = {
	quest: {
		title: string;
		uuid: string;
		quest_type: {
			icon: {
				url: string;
			};
		};
	};
};

export function ModalNextQuestButton({ quest }: Props) {
	const styles = useGameStyles(questModalVariants);
	return (
		<Link href={`?activeQuest=${quest.uuid}`} className={styles.nextButton.wrapper()}>
			<button className={styles.nextButton.base()}>
				<FixedImage alt='quest' src={quest?.quest_type?.icon?.url || ""} className={styles.nextButton.icon()} />
				Next quest:
				<span className={styles.nextButton.title()}>{quest.title}</span>
			</button>
		</Link>
	);
}
