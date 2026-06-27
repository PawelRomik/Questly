import { HiddenAchievementsOption } from "@/app/components/filters/types";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	value: HiddenAchievementsOption;
	onChange: (value: HiddenAchievementsOption) => void;
};

export function HiddenAchievementSelect({ value, onChange }: Props) {
	const styles = useGameStyles(filterVariants);

	return (
		<div className={styles.select.container()}>
			<label className={styles.select.label()}>Secret Achievements</label>

			<div className={styles.select.wrapper()}>
				<select value={value} onChange={(e) => onChange(e.target.value as HiddenAchievementsOption)} className={styles.select.base()}>
					<option value={HiddenAchievementsOption.HIDE}>Hide</option>
					<option value={HiddenAchievementsOption.REVEAL}>Show</option>
				</select>

				<div className={styles.select.icon()}>▼</div>

				<div className={styles.select.accent()} />

				<div className={styles.select.glow()} />
			</div>
		</div>
	);
}
