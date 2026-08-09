import Link from "next/link";
import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
	quest: {
		uuid: string;
		quest_type: {
			icon: string;
		};
		title: string;
	};
};

export function RequirementQuest({ quest, game }: Props) {
	const theme = getTheme("questModal", game);
	const { default_icon } = useGameAssets();
	const t = useTranslations("quests");
	return (
		<div className={theme.requirements.quest.base()}>
			<span className='flex'>
				<FixedImage src={quest?.quest_type?.icon || default_icon} className={theme.requirements.quest.icon()} alt='quest' />

				<span className={theme.requirements.quest.label()}>{t("completedQuest")}</span>
			</span>
			<Link href={`?activeQuest=${quest.uuid}`} className={theme.requirements.quest.link()}>
				{quest.title}
			</Link>
		</div>
	);
}
