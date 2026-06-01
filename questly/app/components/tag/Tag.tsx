"use client";

import { tagVariants } from "@/app/components/tag/variant/tagVariants";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";

import { highlightText } from "@/app/lib/utils/highlightText";
import { DLC } from "@/app/types/quest";

type Props = {
	tag: string;
	search: string;
	searchTags: boolean;
	dlc?: DLC;
};

function adjustColor(color: string, amount: number) {
	const num = parseInt(color.replace("#", ""), 16);

	const r = Math.max(0, Math.min(255, (num >> 16) + amount));
	const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
	const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));

	return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export function Tag({ tag, search, searchTags, dlc }: Props) {
	const { filters, setFilters } = useFilters();
	const styles = useGameStyles(tagVariants);

	const isActive = filters.search.toLowerCase() === tag.toLowerCase() && filters.searchTags;

	return (
		<span
			onClick={(e) => {
				e.stopPropagation();

				setFilters({
					...filters,
					searchTags: !isActive,
					search: isActive ? "" : tag
				});
			}}
			style={
				dlc
					? {
							borderColor: dlc.color,

							background: `linear-gradient(
					to bottom,
					${adjustColor(dlc.color, -30)},
					${adjustColor(dlc.color, -120)}
				)`
						}
					: undefined
			}
			className={`${styles.tag(isActive)} ${dlc ? "text-white" : ""}`}
		>
			{searchTags ? highlightText(tag, search) : tag}
		</span>
	);
}
