"use client";

import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useParams } from "next/navigation";

type Props = {
	value: string;
	onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: Props) {
	const styles = useGameStyles(filterVariants);
	const params = useParams();
	const { content } = params;

	return (
		<div className={styles.searchInput.wrapper()}>
			<input type='text' value={value} onChange={(e) => onChange(e.target.value)} placeholder={`Search ${content}...`} className={styles.searchInput.inputField()} />

			<div className={styles.searchInput.accent()} />

			<div className={styles.searchInput.glow()} />
		</div>
	);
}
