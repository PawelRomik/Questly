import Link from "next/link";

import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useTranslations } from "next-intl";

type Props = {
	quest: {
		uuid: string;
		quest_type: {
			icon: string;
		};
		title: string;
	};
};

export function RequirementQuest({ quest }: Props) {
	const styles = useGameStyles(questModalVariants);
	const { default_icon } = useGameAssets();
	const t = useTranslations("quests");
	return (
		<div className={styles.requirements.quest.base()}>
			<FixedImage src={quest?.quest_type?.icon || default_icon} className={styles.requirements.quest.icon()} alt='quest' />

			<span className={styles.requirements.quest.label()}>{t("completedQuest")}</span>

			<Link href={`?activeQuest=${quest.uuid}`} className={styles.requirements.quest.link()}>
				{quest.title}
			</Link>
		</div>
	);
}
