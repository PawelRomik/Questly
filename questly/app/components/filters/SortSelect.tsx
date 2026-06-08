"use client";

import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { SortOption } from "./types";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	value: SortOption;
	onChange: (value: SortOption) => void;
};

export function SortSelect({ value, onChange }: Props) {
	const styles = useGameStyles(filterVariants);
	return (
		<div className={styles.select.container()}>
			<label className={styles.select.label()}>Sort</label>
			<div className={styles.select.wrapper()}>
				<select value={value} onChange={(e) => onChange(e.target.value as SortOption)} className={styles.select.base()}>
					<option value={SortOption.AZ}>Title A-Z</option>
					<option value={SortOption.ZA}>Title Z-A</option>
					<option value={SortOption.LEVEL_ASC}>Level ↑</option>
					<option value={SortOption.LEVEL_DESC}>Level ↓</option>
				</select>

				<div className={styles.select.icon()}>▼</div>
			</div>
			<div className={styles.select.accent()} />
			<div className={styles.select.glow()} />
		</div>
	);
}
