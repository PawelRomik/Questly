"use client";

import { sectionVariants } from "@/app/components/section/variant/sectionVariants";

type Props = {
	completed: number;
	total: number;
};

export default function ProgressBar({ completed, total }: Props) {
	const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

	const isComplete = percent === 100;

	const styles = sectionVariants["witcher3"];

	return (
		<div className={styles.progressBar.base()}>
			<div className={styles.progressBar.track()}>
				<div className={styles.progressBar.fill(isComplete)} style={{ width: `${percent}%` }} />
			</div>
		</div>
	);
}
