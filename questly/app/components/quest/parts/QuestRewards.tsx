import { Rewards } from "@/app/types/quest";

import { QuestRewardItem } from "./QuestRewardItem";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	rewards: Rewards;
	game?: string;
};

export function QuestRewards({ rewards, game }: Props) {
	const { currency_icon, item_icon, experience_icon } = useGameAssets();
	const theme = getTheme("quest", game);
	const t = useTranslations("quests.rewards");
	return (
		<div className={theme.rewards.base()}>
			<span className={theme.rewards.title()}>{t("reward")}</span>

			<div className={theme.rewards.list()}>
				{rewards.experience > 0 && <QuestRewardItem game={game} value={`+${rewards.experience}`} icon={experience_icon} alt={t("xp")} />}

				{rewards.money > 0 && <QuestRewardItem game={game} value={`+${rewards.money}`} icon={currency_icon} alt={t("money")} />}

				{rewards.items.length > 0 && <QuestRewardItem game={game} value={`+ ${t("item")}`} icon={item_icon} alt={t("item")} />}
			</div>
		</div>
	);
}
