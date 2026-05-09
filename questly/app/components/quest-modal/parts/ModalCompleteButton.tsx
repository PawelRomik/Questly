import { useParams } from "next/navigation";

import { useCompleted } from "@/app/context/CompletedContext";

import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	uuid: string;
};

export function ModalCompleteButton({ uuid }: Props) {
	const { game } = useParams() as { game: string };
	const styles = questModalVariants["witcher3"];

	const { isCompleted, toggle } = useCompleted(game, "quests");
	const completed = isCompleted(uuid);

	return (
		<button onClick={() => toggle(uuid)} className={styles.completeButton.base(completed)}>
			Completed
			<span className={styles.completeButton.wrapper()}>
				<svg viewBox='0 0 24 24' className={styles.completeButton.icon(completed)}>
					<path className={styles.completeButton.mark(completed)} d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
				</svg>
			</span>
		</button>
	);
}
