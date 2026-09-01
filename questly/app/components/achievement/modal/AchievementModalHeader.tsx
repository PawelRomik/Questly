import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { AchievementType } from "@/app/types/achievement";
import { useTranslations } from "next-intl";

type Props = {
	game: string;
	achievement: AchievementType;
};

export default function AchievementModalHeader({ game, achievement }: Props) {
	const theme = getTheme("achievement", game);
	const { achievement_icon } = useGameAssets();
	const t = useTranslations();

	return (
		<div className={theme.modal.header.base()}>
			<FixedImage src={achievement.icon ?? achievement_icon} alt={achievement.title} className={theme.modal.header.icon()} />
			<h2 className={theme.modal.header.title()}>{achievement.title ?? t("achievements.unnamed")}</h2>
			{achievement.dlc && <FixedImage src={achievement.dlc?.icon} alt={t("tags.dlc")} className={theme.modal.header.dlc()} />}
		</div>
	);
}
