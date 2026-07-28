import { useCompleted } from "@/app/context/CompletedContext";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	uuid: string;
	game: string;
};

export function ModalCompleteButton({ uuid, game }: Props) {
	const { isCompleted, toggle } = useCompleted(game, "quests");
	const completed = isCompleted(uuid);
	const theme = getTheme("questModal", game);

	return (
		<button onClick={() => toggle(uuid)} className={theme.completeButton.base(completed)}>
			Completed
			<span className={theme.completeButton.wrapper()}>
				<svg viewBox='0 0 24 24' className={theme.completeButton.icon(completed)}>
					<path className={theme.completeButton.icon(completed)} d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
				</svg>
			</span>
		</button>
	);
}
