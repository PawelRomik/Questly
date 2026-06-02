"use client";

import { tagVariants } from "@/app/components/tag/variant/tagVariants";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import adjustColor from "@/app/lib/utils/adjustColor";

import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	tag: {
		name: string;
		dlc?: {
			color: string;
		};
	};
	search: string;
	searchTags: boolean;
};

export function Tag({ tag, search, searchTags }: Props) {
	const { filters, setFilters } = useFilters();
	const styles = useGameStyles(tagVariants);

	const isActive = filters.search.toLowerCase() === tag.name.toLowerCase() && filters.searchTags;

	return (
		<span
			onClick={(e) => {
				e.stopPropagation();

				setFilters({
					...filters,
					searchTags: !isActive,
					search: isActive ? "" : tag.name
				});
			}}
			style={
				tag.dlc
					? {
							borderColor: tag.dlc.color,

							background: `linear-gradient(
					to bottom,
					${adjustColor(tag.dlc.color, -30)},
					${adjustColor(tag.dlc.color, -120)}
				)`
						}
					: undefined
			}
			className={`${styles.tag(isActive)} ${tag.dlc ? "text-white" : ""}`}
		>
			{searchTags ? highlightText(tag.name, search) : tag.name}
		</span>
	);
}
