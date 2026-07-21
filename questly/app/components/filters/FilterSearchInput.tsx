"use client";

import { filterVariants } from "@/app/components/filters/variant/filterVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

type Props = {
	value: string;
	onChange: (value: string) => void;
};

export function FilterSearchInput({ value, onChange }: Props) {
	const styles = useGameStyles(filterVariants);
	const params = useParams();
	const t = useTranslations();
	const { content } = params;
	const contentParam = Array.isArray(content) ? (content[0] ?? "") : (content ?? "");

	const contentLabel = {
		achievements: t("achievements.achievements"),
		quests: t("quests.quests"),
		collectibles: t("collections.collectibles"),
		map: "Map"
	}[contentParam];

	return (
		<div className={styles.searchInput.wrapper()}>
			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={t("filters.search", { content: contentLabel || "" })}
				className={styles.searchInput.inputField()}
			/>

			<div className={styles.searchInput.accent()} />

			<div className={styles.searchInput.glow()} />
		</div>
	);
}
