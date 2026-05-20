"use client";

import { tagVariants } from "@/app/components/tag/variant/tagVariants";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";

import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	tag: string;
	search: string;
	searchTags: boolean;
};

export function Tag({ tag, search, searchTags }: Props) {
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
			className={styles.tag(isActive)}
		>
			{searchTags ? highlightText(tag, search) : tag}
		</span>
	);
}
