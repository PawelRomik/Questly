import { Rewards } from "@/app/types/quest";

import { RewardCurrency } from "./RewardCurrency";
import { RewardItems } from "./RewardItems";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	rewards: Rewards;
	game?: string;
};

export function ModalRewards({ rewards, game }: Props) {
	const { currency_icon, experience_icon } = useGameAssets();
	const theme = getTheme("questModal", game);
	const t = useTranslations("quests.rewards");

	const hasRewards = rewards && (rewards.experience > 0 || rewards.money > 0 || (rewards.items?.length ?? 0) > 0);

	if (!hasRewards) {
		return null;
	}

	return (
		<div className={theme.rewards.base()}>
			<h3 className={theme.rewards.title()}>{t("reward")}</h3>

			<div className={theme.rewards.content()}>
				<div className={theme.rewards.list()}>
					<RewardCurrency game={game} icon={experience_icon} value={rewards.experience} />

					<RewardCurrency game={game} icon={currency_icon} value={rewards.money} />

					<RewardItems game={game} items={rewards.items} />
				</div>
			</div>
		</div>
	);
}
