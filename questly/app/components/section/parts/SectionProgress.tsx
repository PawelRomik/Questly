import ProgressBar from "@/app/components/section/ProgressBar";
import { sectionVariants } from "@/app/components/section/variant/sectionVariants";

type Props = {
	completed: number;
	total: number;
};

export function SectionProgress({ completed, total }: Props) {
	const styles = sectionVariants["witcher3"];
	return (
		<div className={styles.section.progress()}>
			<ProgressBar completed={completed} total={total} />
		</div>
	);
}
