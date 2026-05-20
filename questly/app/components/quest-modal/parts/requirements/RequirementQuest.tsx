import Link from "next/link";

import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import FixedImage from "@/app/components/common/FixedImage";

type Props = {
	quest: {
		uuid: string;
		quest_type: {
			icon: {
				url: string;
			};
		};
		title: string;
	};
};

export function RequirementQuest({ quest }: Props) {
	const styles = useGameStyles(questModalVariants);
	return (
		<div className={styles.requirements.quest.base()}>
			<FixedImage src={quest?.quest_type?.icon?.url || ""} className={styles.requirements.quest.icon()} alt='quest' />

			<span className={styles.requirements.quest.label()}>Completed quest:</span>

			<Link href={`?activeQuest=${quest.uuid}`} className={styles.requirements.quest.link()}>
				{quest.title}
			</Link>
		</div>
	);
}
