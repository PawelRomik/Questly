"use client";

import { filterVariants } from "@/app/components/filters/variant/filterVariants";

type Props = {
	value: string;
	onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: Props) {
	const styles = filterVariants["witcher3"];

	return (
		<div className={styles.searchInput.wrapper()}>
			<input type='text' value={value} onChange={(e) => onChange(e.target.value)} placeholder='Search quests...' className={styles.searchInput.inputField()} />

			<div className={styles.searchInput.accent()} />

			<div className={styles.searchInput.glow()} />
		</div>
	);
}
