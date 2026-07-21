import { Rewards } from "@/app/types/quest";

import { RewardCurrency } from "./RewardCurrency";
import { RewardItems } from "./RewardItems";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

type Props = {
	rewards: Rewards;
	hideMap?: boolean;
};

export function ModalRewards({ rewards, hideMap = false }: Props) {
	const styles = useGameStyles(questModalVariants);
	const { currency_icon, experience_icon } = useGameAssets();

	return (
		<div className={styles.rewards.base(hideMap)}>
			<h3 className={styles.rewards.title()}>Rewards</h3>

			<div className={styles.rewards.content()}>
				<div className={styles.rewards.list()}>
					<RewardCurrency icon={experience_icon} value={rewards.experience} />

					<RewardCurrency icon={currency_icon} value={rewards.money} />

					<RewardItems items={rewards.items} />
				</div>
			</div>
		</div>
	);
}
