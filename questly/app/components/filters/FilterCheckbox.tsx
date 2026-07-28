"use client";

import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
import { useTranslations } from "next-intl";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	label: string;
	checked: boolean;
	disabled?: boolean;
	onChange: (value: boolean) => void;
	game?: string;
};

export function FilterCheckbox({ label, checked, disabled, onChange, game }: Props) {
	const { checkbox_image } = useGameAssets();
	const theme = getTheme("filter", game);
	const t = useTranslations("filters");
	return (
		<label className={theme.checkbox.wrapper(disabled)}>
			<div className={theme.checkbox.inputWrapper()}>
				<input type='checkbox' disabled={disabled} checked={checked} onChange={(e) => onChange(e.target.checked)} className={theme.checkbox.input()} />

				<div className={theme.checkbox.base()}>{checked && <FixedImage src={checkbox_image} alt={t("check")} className={theme.checkbox.icon()} />}</div>
			</div>

			<span className={theme.checkbox.label()}>{label}</span>
		</label>
	);
}
