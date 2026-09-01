import { useCompleted } from "@/app/context/CompletedContext";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	uuid: string;
	game: string;
};

export default function AchievementModalFooter({ game, uuid }: Props) {
	const { toggle, isCompleted } = useCompleted(game, "achievements");
	const completed = isCompleted(uuid);
	const theme = getTheme("achievement", game);
	const t = useTranslations();

	return (
		<div className={theme.modal.footer()}>
			<button type='button' onClick={() => toggle(uuid)} className={theme.modal.completed.button(completed)}>
				{t("quests.completed")}
				<span className={theme.modal.completed.wrapper()}>
					<svg viewBox='0 0 24 24' className={theme.modal.completed.icon(completed)}>
						<path className={theme.modal.completed.icon(completed)} d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
					</svg>
				</span>
			</button>
		</div>
	);
}
