import ProgressBar from "@/app/components/section/ProgressBar";
import { sectionVariants } from "@/app/components/section/variant/sectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	completed: number;
	total: number;
};

export function SectionProgress({ completed, total }: Props) {
	const styles = useGameStyles(sectionVariants);
	return (
		<div className={styles.section.progress()}>
			<ProgressBar completed={completed} total={total} />
		</div>
	);
}
