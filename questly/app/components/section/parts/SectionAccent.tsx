import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed?: number;
	total: number;
	game?: string;
};

export function SectionAccent({ completed, total, game }: Props) {
	const theme = getTheme("section", game);

	return (
		<div className={theme.section.accent.base()}>
			<div style={{ backgroundColor: theme.section.accent.color(completed, total) }} className={theme.section.accent.bar()} />

			<div style={{ backgroundColor: theme.section.accent.color(completed, total) }} className={theme.section.accent.glow()} />
		</div>
	);
}
