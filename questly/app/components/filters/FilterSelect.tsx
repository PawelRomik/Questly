import { getTheme } from "@/app/lib/utils/getTheme";

type Option<T extends string> = {
	value: T;
	label: string;
};

type Props<T extends string> = {
	label: string;
	value: T;
	onChange: (value: T) => void;
	options: Option<T>[];
	game?: string;
};

export default function FilterSelect<T extends string>({ label, value, onChange, options, game }: Props<T>) {
	const theme = getTheme("filter", game);

	return (
		<div className={theme.select.container()}>
			<label className={theme.select.label()}>{label}</label>

			<div className={theme.select.wrapper()}>
				<select value={value} onChange={(e) => onChange(e.target.value as T)} className={theme.select.base()}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				<div className={theme.select.icon()}>▼</div>
				<div className={theme.select.accent()} />
				<div className={theme.select.glow()} />
			</div>
		</div>
	);
}
