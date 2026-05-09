"use client";
import Image from "next/image";
import sword from "../../../public/assets/sword.webp";
import { filterVariants } from "@/app/components/filters/variant/filterVariants";

type Props = {
	label: string;
	checked: boolean;
	disabled?: boolean;
	onChange: (value: boolean) => void;
};

export function Checkbox({ label, checked, disabled, onChange }: Props) {
	const styles = filterVariants["witcher3"];
	return (
		<label className={styles.checkbox.wrapper(disabled)}>
			<div className={styles.checkbox.inputWrapper()}>
				<input type='checkbox' disabled={disabled} checked={checked} onChange={(e) => onChange(e.target.checked)} className={styles.checkbox.input()} />

				<div className={styles.checkbox.base()}>{checked && <Image src={sword} alt='check' unoptimized className={styles.checkbox.icon()} />}</div>
			</div>

			<span className={styles.checkbox.label()}>{label}</span>
		</label>
	);
}
