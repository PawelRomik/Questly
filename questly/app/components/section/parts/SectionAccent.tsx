import { sectionVariants } from "@/app/components/section/variant/sectionVariants";

type Props = {
	completed?: number;
	total: number;
};

export function SectionAccent({ completed, total }: Props) {
	const styles = sectionVariants["witcher3"];

	return (
		<div className={styles.section.accent.base()}>
			<div style={{ backgroundColor: styles.section.accent.color(completed, total) }} className={styles.section.accent.bar()} />

			<div style={{ backgroundColor: styles.section.accent.color(completed, total) }} className={styles.section.accent.glow()} />
		</div>
	);
}
