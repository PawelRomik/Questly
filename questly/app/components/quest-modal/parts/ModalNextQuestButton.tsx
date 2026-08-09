import Link from "next/link";
import FixedImage from "@/app/components/common/FixedImage";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useActiveQuest } from "@/app/hooks/useActiveQuest";

type Props = {
	game?: string;
	quest: {
		title: string;
		uuid: string;
		quest_type: {
			icon: string;
		};
	};
};

export function ModalNextQuestButton({ quest, game }: Props) {
	const theme = getTheme("questModal", game);
	const { setActiveQuestId } = useActiveQuest();
	const t = useTranslations("quests");
	return (
		<Link title={quest.title} href={`?activeQuest=${quest.uuid}`} className={theme.nextButton.wrapper()}>
			<button onClick={() => setActiveQuestId(quest.uuid)} className={theme.nextButton.base()}>
				<FixedImage alt={t("icon")} src={quest?.quest_type?.icon || ""} className={theme.nextButton.icon()} />
				<span className='flex flex-col'>
					{t("nextQuest")}
					<span className={theme.nextButton.title()}>{quest.title}</span>
				</span>
			</button>
		</Link>
	);
}
