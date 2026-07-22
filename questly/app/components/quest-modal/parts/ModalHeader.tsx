import { Quest } from "@/app/types/quest";
import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import default_banner from "../../../../public/assets/banner.png";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useTranslations } from "next-intl";

type Props = {
	quest: Quest;
};

export function ModalHeader({ quest }: Props) {
	const styles = useGameStyles(questModalVariants);
	const { missable_logo } = useGameAssets();
	const t = useTranslations();
	return (
		<div className={styles.header.base()}>
			<FixedImage src={quest.location?.banner ?? default_banner} className={styles.header.image()} alt={quest.location.name} />

			<div>
				<div className={styles.header.title.wrapper()}>
					<h2 className={styles.header.title.base()}>{quest.title}</h2>
					{quest.dlc && <FixedImage src={quest.dlc?.icon} alt={t("tags.dlc")} className={styles.header.title.image()} />}
					{quest.missable && <FixedImage src={missable_logo} alt={t("tags.dlc")} className={styles.header.title.image()} />}
				</div>

				<p style={{ color: quest.dlc?.color }} className={styles.header.subtitle()}>
					{quest.location.name} | <span>{quest.quest_type.name}</span>
				</p>

				<p className={styles.header.level()}>{t("quests.suggestedLevel", { level: quest.level })}</p>
			</div>
		</div>
	);
}
