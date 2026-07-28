"use client";

import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

type Props = {
	value: string;
	onChange: (value: string) => void;
	game?: string;
};

export function FilterSearchInput({ value, onChange, game }: Props) {
	const params = useParams();
	const t = useTranslations();
	const { content } = params;
	const contentParam = Array.isArray(content) ? (content[0] ?? "") : (content ?? "");

	const theme = getTheme("filter", game);

	const contentLabel = {
		achievements: t("achievements.achievements"),
		quests: t("quests.quests"),
		collectibles: t("collections.collectibles"),
		map: "Map"
	}[contentParam];

	return (
		<div className={theme.searchInput.wrapper()}>
			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={t("filters.search", { content: contentLabel || "" })}
				className={theme.searchInput.inputField()}
			/>

			<div className={theme.searchInput.accent()} />

			<div className={theme.searchInput.glow()} />
		</div>
	);
}
