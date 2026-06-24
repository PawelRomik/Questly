import { SortOption } from "@/app/components/filters/types";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type SortField = "title" | "level";

type Props = {
	value: SortOption;
	onChange: (value: SortOption) => void;
	values: SortField[];
};

export function SortSelect({ value, onChange, values }: Props) {
	const styles = useGameStyles(filterVariants);

	return (
		<div className={styles.select.container()}>
			<label className={styles.select.label()}>Sort</label>

			<div className={styles.select.wrapper()}>
				<select value={value} onChange={(e) => onChange(e.target.value as SortOption)} className={styles.select.base()}>
					{values.includes("title") && (
						<>
							<option value={SortOption.AZ}>Title A-Z</option>
							<option value={SortOption.ZA}>Title Z-A</option>
						</>
					)}

					{values.includes("level") && (
						<>
							<option value={SortOption.LEVEL_ASC}>Level ↑</option>
							<option value={SortOption.LEVEL_DESC}>Level ↓</option>
						</>
					)}
				</select>

				<div className={styles.select.icon()}>▼</div>
			</div>

			<div className={styles.select.accent()} />
			<div className={styles.select.glow()} />
		</div>
	);
}
