import { Quest } from "@/app/types/quest";
import FixedImage from "@/app/components/common/FixedImage";
import default_banner from "../../../../public/assets/banner.png";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	quest: Quest;
	game?: string;
};

export function ModalHeader({ quest, game }: Props) {
	const { missable_logo } = useGameAssets();
	const t = useTranslations();
	const theme = getTheme("questModal", game);
	return (
		<div className={theme.header.base()}>
			<FixedImage src={quest.location?.banner ?? default_banner} className={theme.header.image()} alt={quest.location.name} />

			<div>
				<div className={theme.header.title.wrapper()}>
					<h2 className={theme.header.title.base()}>{quest.title}</h2>
					{quest.dlc && <FixedImage src={quest.dlc?.icon} alt={t("tags.dlc")} className={theme.header.title.image()} />}
					{quest.missable && <FixedImage src={missable_logo} alt={t("tags.dlc")} className={theme.header.title.image()} />}
				</div>

				<p style={{ color: quest.dlc?.color }} className={theme.header.subtitle()}>
					{quest.location.name} | <span>{quest.quest_type.name}</span>
				</p>

				<p className={theme.header.level()}>{t("quests.suggestedLevel", { level: quest.level })}</p>
			</div>
		</div>
	);
}
