import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed: boolean;
	onClick: (e: React.MouseEvent) => void;
	game?: string;
};

export function QuestButton({ completed, onClick, game }: Props) {
	const theme = getTheme("quest", game);
	return (
		<button onClick={onClick} className={theme.button.base(completed)}>
			<svg viewBox='0 0 24 24' className={theme.button.icon(completed)}>
				<path d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
			</svg>
		</button>
	);
}
