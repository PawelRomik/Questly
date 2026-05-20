"use client";

import { sectionVariants } from "@/app/components/section/variant/sectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	completed: number;
	total: number;
};

export default function ProgressBar({ completed, total }: Props) {
	const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

	const isComplete = percent === 100;

	const styles = useGameStyles(sectionVariants);

	return (
		<div className={styles.progressBar.base()}>
			<div className={styles.progressBar.track()}>
				<div className={styles.progressBar.fill(isComplete)} style={{ width: `${percent}%` }} />
			</div>
		</div>
	);
}
