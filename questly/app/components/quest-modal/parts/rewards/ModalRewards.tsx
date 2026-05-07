import { Rewards } from "@/app/types/quest";

import { RewardCurrency } from "./RewardCurrency";
import { RewardItems } from "./RewardItems";

import xp from "../../../../../public/assets/xp.webp";
import money from "../../../../../public/assets/money.webp";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	rewards: Rewards;
};

export function ModalRewards({ rewards }: Props) {
	const styles = questModalVariants["witcher3"];

	return (
		<div className={styles.rewards.base()}>
			<h3 className={styles.rewards.title()}>Rewards</h3>

			<div className={styles.rewards.content()}>
				<div className={styles.rewards.list()}>
					<RewardCurrency icon={xp} value={rewards.experience} />

					<RewardCurrency icon={money} value={rewards.money} />

					<RewardItems items={rewards.items} />
				</div>
			</div>
		</div>
	);
}
