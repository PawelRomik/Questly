import FixedImage from "@/app/components/common/FixedImage";
import AchievementImageCorners from "@/app/components/achievement/image/AchievementImageCorners";
import AchievementImageOverlay from "@/app/components/achievement/image/AchievementImageOverlay";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

type Props = {
	src: string;
	completed: boolean;
};

export function AchievementImage({ src, completed }: Props) {
	const styles = achievementVariants["witcher3"];
	return (
		<div className={styles.image.wrapper()}>
			<div className={styles.image.container(completed)}>
				<FixedImage src={src} alt='Achievement icon' className={styles.image.img(completed)} />

				<AchievementImageCorners completed={completed} />

				{completed && <AchievementImageOverlay />}
			</div>
		</div>
	);
}
