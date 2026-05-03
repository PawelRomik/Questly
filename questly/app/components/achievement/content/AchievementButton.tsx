import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

type Props = {
	completed: boolean;
	onClick: (e: React.MouseEvent) => void;
};

export function AchievementButton({ completed, onClick }: Props) {
	const styles = achievementVariants["witcher3"];
	return (
		<button onClick={onClick} className={styles.button.root(completed)}>
			<svg viewBox='0 0 24 24' className={styles.button.icon(completed)}>
				<path d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
			</svg>
		</button>
	);
}
