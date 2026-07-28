import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed: boolean;
	color: string;
	game?: string;
};

export function QuestAccent({ completed, color, game }: Props) {
	const theme = getTheme("quest", game);
	return (
		<div className={theme.accent.base()}>
			<div style={{ backgroundColor: theme.accent.color(completed, color) }} className={theme.accent.bar()} />

			<div style={{ backgroundColor: theme.accent.color(completed, color) }} className={theme.accent.glow()} />
		</div>
	);
}
