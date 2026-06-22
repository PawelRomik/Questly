import FixedImage from "@/app/components/common/FixedImage";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { highlightText } from "@/app/lib/utils/highlightText";
import { QuestWithMatches } from "@/app/types/quest";

type Props = {
	quest: QuestWithMatches;
};

export function QuestTitle({ quest }: Props) {
	const styles = useGameStyles(questVariants);
	const { missable_logo } = useGameAssets();

	return (
		<div className={styles.content.title.wrapper()}>
			<h2 className={styles.content.title.base()}>{highlightText(quest.title, quest._titleMatch)}</h2>
			{quest.dlc && <FixedImage src={quest.dlc?.icon?.url} alt='dlc' className={styles.content.dlc()} />}
			{quest.missable && <FixedImage src={missable_logo} alt='dlc' className={styles.content.dlc()} />}
		</div>
	);
}
