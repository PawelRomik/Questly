import { getTheme } from "@/app/lib/utils/getTheme";
import { highlightText } from "@/app/lib/utils/highlightText";
import { QuestWithMatches } from "@/app/types/quest";
import { useTranslations } from "next-intl";

type Props = {
	quest: QuestWithMatches;
	game?: string;
};

export function QuestTitle({ quest, game }: Props) {
	const theme = getTheme("quest", game);
	const t = useTranslations();

	return (
		<div className={theme.content.title.wrapper()}>
			<h2 className={theme.content.title.base()}>{highlightText(quest.title ?? t("quests.unnamed"), quest._titleMatch)}</h2>
		</div>
	);
}
