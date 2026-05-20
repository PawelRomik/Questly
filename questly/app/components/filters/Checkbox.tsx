"use client";

import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";

type Props = {
	label: string;
	checked: boolean;
	disabled?: boolean;
	onChange: (value: boolean) => void;
};

export function Checkbox({ label, checked, disabled, onChange }: Props) {
	const { checkbox_image } = useGameAssets();
	const styles = useGameStyles(filterVariants);
	return (
		<label className={styles.checkbox.wrapper(disabled)}>
			<div className={styles.checkbox.inputWrapper()}>
				<input type='checkbox' disabled={disabled} checked={checked} onChange={(e) => onChange(e.target.checked)} className={styles.checkbox.input()} />

				<div className={styles.checkbox.base()}>{checked && <FixedImage src={checkbox_image?.url || ""} alt='check' className={styles.checkbox.icon()} />}</div>
			</div>

			<span className={styles.checkbox.label()}>{label}</span>
		</label>
	);
}
