import Link from "next/link";

import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import FixedImage from "@/app/components/common/FixedImage";
import { useTranslations } from "next-intl";

type Props = {
	quest: {
		title: string;
		uuid: string;
		quest_type: {
			icon: string;
		};
	};
};

export function ModalNextQuestButton({ quest }: Props) {
	const styles = useGameStyles(questModalVariants);
	const t = useTranslations("quests");
	return (
		<Link title={quest.title} href={`?activeQuest=${quest.uuid}`} className={styles.nextButton.wrapper()}>
			<button className={styles.nextButton.base()}>
				<FixedImage alt={t("icon")} src={quest?.quest_type?.icon || ""} className={styles.nextButton.icon()} />
				{t("nextQuest")}
				<span className={styles.nextButton.title()}>{quest.title}</span>
			</button>
		</Link>
	);
}
