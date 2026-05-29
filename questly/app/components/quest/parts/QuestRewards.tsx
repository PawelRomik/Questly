import { Rewards } from "@/app/types/quest";

import { QuestRewardItem } from "./QuestRewardItem";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";

type Props = {
	rewards: Rewards;
};

export function QuestRewards({ rewards }: Props) {
	const styles = useGameStyles(questVariants);
	const { currency_icon, item_icon, experience_icon } = useGameAssets();
	return (
		<div className={styles.rewards.base()}>
			<span className={styles.rewards.title()}>Reward</span>

			<div className={styles.rewards.list()}>
				{rewards.experience > 0 && <QuestRewardItem value={`+${rewards.experience}`} icon={experience_icon} alt='xp' />}

				{rewards.money > 0 && <QuestRewardItem value={`+${rewards.money}`} icon={currency_icon} alt='money' />}

				{rewards.items.length > 0 && <QuestRewardItem value='+ item' icon={item_icon} alt='item' />}
			</div>
		</div>
	);
}
