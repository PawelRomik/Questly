import FixedImage from "@/app/components/common/FixedImage";
import AchievementImageCorners from "@/app/components/achievement/image/AchievementImageCorners";
import AchievementImageOverlay from "@/app/components/achievement/image/AchievementImageOverlay";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	src: string;
	completed: boolean;
	title: string;
	game?: string;
};

export function AchievementImage({ src, completed, title, game }: Props) {
	const t = useTranslations("achievements");
	const theme = getTheme("achievement", game);
	return (
		<div className={theme.image.wrapper()}>
			<div className={theme.image.container(completed)}>
				<FixedImage src={src} alt={t("icon", { title })} className={theme.image.img(completed)} />

				<AchievementImageCorners game={game} completed={completed} />

				{completed && <AchievementImageOverlay game={game} />}
			</div>
		</div>
	);
}
