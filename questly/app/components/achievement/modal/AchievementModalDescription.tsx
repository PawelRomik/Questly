import FixedImage from "@/app/components/common/FixedImage";
import { RichDescription } from "@/app/components/common/RichDescription";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	description: string;
	game: string;
};

export default function AchievementModalDescription({ description, game }: Props) {
	const { missable_color, missable_icon } = useGameAssets();
	const theme = getTheme("achievement", game);
	const t = useTranslations();

	return (
		<div className={theme.modal.description()}>
			<div className='flex items-center'>
				<FixedImage className='h-4 w-auto' src={missable_icon} alt={t("tags.missable")} />
				<p style={{ color: missable_color }}>{t("tags.missable")}</p>
			</div>
			<RichDescription desc={description ?? ""} />
		</div>
	);
}
