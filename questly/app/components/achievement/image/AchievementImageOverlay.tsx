import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export default function AchievementImageOverlay({ game }: Props) {
	const theme = getTheme("achievement", game);
	return <div className={theme.image.overlay()} />;
}
