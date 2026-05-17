import money from "../../../../public/assets/money.webp";

import item from "../../../../public/assets/item.webp";

import exp from "../../../../public/assets/xp.webp";

import { Rewards } from "@/app/types/quest";

import { QuestRewardItem } from "./QuestRewardItem";
import { questVariants } from "@/app/components/quest/variant/questVariants";

type Props = {
	rewards: Rewards;
};

export function QuestRewards({ rewards }: Props) {
	const styles = questVariants["witcher3"];
	return (
		<div className={styles.rewards.base()}>
			<span className={styles.rewards.title()}>Reward</span>

			<div className={styles.rewards.list()}>
				{rewards.experience > 0 && <QuestRewardItem value={`+${rewards.experience}`} icon={exp} alt='xp' />}

				{rewards.money > 0 && <QuestRewardItem value={`+${rewards.money}`} icon={money} alt='money' />}

				{rewards.items.length > 0 && <QuestRewardItem value='+ item' icon={item} alt='item' />}
			</div>
		</div>
	);
}
