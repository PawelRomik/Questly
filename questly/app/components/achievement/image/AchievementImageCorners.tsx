import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

const achievementImageCornerPositions = {
	tl: "top-0 left-0 border-t border-l",
	tr: "top-0 right-0 border-t border-r",
	bl: "bottom-0 left-0 border-b border-l",
	br: "bottom-0 right-0 border-b border-r"
};

type Props = {
	completed: boolean;
};

export default function AchievementImageCorners({ completed }: Props) {
	const styles = useGameStyles(achievementVariants);
	return (
		<div className={styles.image.corners.style(completed)}>
			{Object.values(achievementImageCornerPositions).map((pos, i) => (
				<div
					key={i}
					className={`
            ${styles.image.corners.style(completed)}
			${styles.image.corners.borders()}
            ${pos}
            
          `}
				/>
			))}
		</div>
	);
}
