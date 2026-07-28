import { getTheme } from "@/app/lib/utils/getTheme";

const achievementImageCornerPositions = {
	tl: "top-0 left-0 border-t border-l",
	tr: "top-0 right-0 border-t border-r",
	bl: "bottom-0 left-0 border-b border-l",
	br: "bottom-0 right-0 border-b border-r"
};

type Props = {
	completed: boolean;
	game?: string;
};

export default function AchievementImageCorners({ completed, game }: Props) {
	const theme = getTheme("achievement", game);
	return (
		<div className={theme.image.corners.style(completed)}>
			{Object.values(achievementImageCornerPositions).map((pos, i) => (
				<div
					key={i}
					className={`
            ${theme.image.corners.style(completed)}
			${theme.image.corners.borders()}
            ${pos}
            
          `}
				/>
			))}
		</div>
	);
}
