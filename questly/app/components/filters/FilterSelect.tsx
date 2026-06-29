import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Option<T extends string> = {
	value: T;
	label: string;
};

type Props<T extends string> = {
	label: string;
	value: T;
	onChange: (value: T) => void;
	options: Option<T>[];
};

export default function FilterSelect<T extends string>({ label, value, onChange, options }: Props<T>) {
	const styles = useGameStyles(filterVariants);

	return (
		<div className={styles.select.container()}>
			<label className={styles.select.label()}>{label}</label>

			<div className={styles.select.wrapper()}>
				<select value={value} onChange={(e) => onChange(e.target.value as T)} className={styles.select.base()}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				<div className={styles.select.icon()}>▼</div>
				<div className={styles.select.accent()} />
				<div className={styles.select.glow()} />
			</div>
		</div>
	);
}
