import { MissableOption } from "@/app/components/filters/types";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	value: MissableOption;
	onChange: (value: MissableOption) => void;
};

export function MissableSelect({ value, onChange }: Props) {
	const styles = useGameStyles(filterVariants);

	return (
		<div className={styles.select.container()}>
			<label className={styles.select.label()}>Missables</label>

			<div className={styles.select.wrapper()}>
				<select value={value} onChange={(e) => onChange(e.target.value as MissableOption)} className={styles.select.base()}>
					<option value={MissableOption.DEFAULT}>Default</option>
					<option value={MissableOption.SHOW_FIRST}>Show first</option>
					<option value={MissableOption.SHOW_ONLY}>Show only</option>
				</select>

				<div className={styles.select.icon()}>▼</div>

				<div className={styles.select.accent()} />

				<div className={styles.select.glow()} />
			</div>
		</div>
	);
}
