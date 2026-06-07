"use client";

import { tagVariants } from "@/app/components/tag/variant/tagVariants";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import adjustColor from "@/app/lib/utils/adjustColor";

import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	tag: string;

	search: string;
	searchTags: boolean;
	type?: "tag" | "dlc" | "missable";
	color?: string;
};

export function Tag({ tag, search, searchTags, type, color }: Props) {
	const { filters, setFilters } = useFilters();
	const styles = useGameStyles(tagVariants);

	const isActive = filters.search.toLowerCase() === tag.toLowerCase() && filters.searchTags;

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		if (type === "dlc") {
			/*
        setFilters({
            ...filters,
            dlc: !filters.dlc
        });*/

			return;
		}

		if (type === "missable") {
			/*
        setFilters({
            ...filters,
            missable: !filters.missable
        });*/

			return;
		}

		setFilters({
			...filters,
			searchTags: !isActive,
			search: isActive ? "" : tag
		});
	};

	return (
		<span
			onClick={onClick}
			style={color ? { borderColor: color, background: `linear-gradient( to bottom, ${adjustColor(color, -30)}, ${adjustColor(color, -120)} )` } : undefined}
			className={styles.tag(isActive, color)}
		>
			{searchTags ? highlightText(tag, search) : tag}
		</span>
	);
}
