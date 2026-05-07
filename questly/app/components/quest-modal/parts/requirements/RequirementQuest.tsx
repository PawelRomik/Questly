import Link from "next/link";
import Image from "next/image";

import questIcon from "../../../../../public/assets/quest.png";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	quest: {
		uuid: string;
		title: string;
	};
};

export function RequirementQuest({ quest }: Props) {
	const styles = questModalVariants["witcher3"];
	return (
		<div className={styles.requirements.quest.base()}>
			<Image src={questIcon} unoptimized className={styles.requirements.quest.icon()} alt='quest' />

			<span className={styles.requirements.quest.label()}>Completed quest:</span>

			<Link href={`?activeQuest=${quest.uuid}`} className={styles.requirements.quest.link()}>
				{quest.title}
			</Link>
		</div>
	);
}
