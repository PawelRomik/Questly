import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { highlightText } from "@/app/lib/utils/highlightText";
import { QuestWithMatches } from "@/app/types/quest";
import { useTranslations } from "next-intl";

type Props = {
	quest: QuestWithMatches;
	game?: string;
};

export function QuestTitle({ quest, game }: Props) {
	const { missable_logo } = useGameAssets();
	const t = useTranslations("tags");
	const theme = getTheme("quest", game);

	return (
		<div className={theme.content.title.wrapper()}>
			<h2 className={theme.content.title.base()}>{highlightText(quest.title, quest._titleMatch)}</h2>
			{quest.dlc && <FixedImage src={quest.dlc?.icon} alt={t("dlc")} className={theme.content.dlc()} />}
			{quest.missable && <FixedImage src={missable_logo} alt={t("missable")} className={theme.content.dlc()} />}
		</div>
	);
}
