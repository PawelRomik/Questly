import FixedImage from "@/app/components/common/FixedImage";
import AchievementImageCorners from "@/app/components/achievement/image/AchievementImageCorners";
import AchievementImageOverlay from "@/app/components/achievement/image/AchievementImageOverlay";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

type Props = {
	src: string;
	completed: boolean;
	title: string;
};

export function AchievementImage({ src, completed, title }: Props) {
	const styles = useGameStyles(achievementVariants);
	const t = useTranslations("achievements");
	return (
		<div className={styles.image.wrapper()}>
			<div className={styles.image.container(completed)}>
				<FixedImage src={src} alt={t("icon", { title })} className={styles.image.img(completed)} />

				<AchievementImageCorners completed={completed} />

				{completed && <AchievementImageOverlay />}
			</div>
		</div>
	);
}
