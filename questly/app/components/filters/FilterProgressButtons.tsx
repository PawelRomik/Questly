"use client";

import { getTheme } from "@/app/lib/utils/getTheme";
import { exportLocalStorage } from "@/app/lib/utils/localStorage/exportLocalStorage";
import { importLocalStorage } from "@/app/lib/utils/localStorage/importLocalStorage";
import { useTranslations } from "next-intl";
import { useRef } from "react";

type Props = {
	game: string;
};

export default function FilterProgressButtons({ game }: Props) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const theme = getTheme("filter", game);
	const t = useTranslations("progressBackup");

	const handleExportClick = () => {
		exportLocalStorage({
			noProgressToExport: t("noProgressToExport")
		});
	};

	const handleImportClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			importLocalStorage(file, {
				invalidFile: t("invalidFile"),
				invalidShape: t("invalidShape"),
				confirmOverwrite: t("confirmOverwrite")
			});
		}

		e.target.value = "";
	};

	return (
		<div className='flex gap-2'>
			<button type='button' onClick={handleExportClick} className={theme.localStorageButton()}>
				{t("exportButton")}
			</button>

			<button type='button' onClick={handleImportClick} className={theme.localStorageButton()}>
				{t("importButton")}
			</button>

			<input ref={fileInputRef} type='file' accept='.txt' onChange={handleFileChange} className='hidden' />
		</div>
	);
}
