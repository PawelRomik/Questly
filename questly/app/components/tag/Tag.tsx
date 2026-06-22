"use client";

import { MissableOption } from "@/app/components/filters/types";
import { tagVariants } from "@/app/components/tag/variant/tagVariants";
import { useFilters } from "@/app/context/FiltersContext";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import adjustColor from "@/app/lib/utils/adjustColor";

import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	tag: string;
	searchTags: boolean;
	type?: "tag" | "dlc" | "missable";
	color?: string;
	match?: readonly [number, number][];
};

export function Tag({ tag, match, searchTags, type, color }: Props) {
	const { filters, setFilters } = useFilters();
	const styles = useGameStyles(tagVariants);

	const isActive = filters.search.toLowerCase() === tag.toLowerCase() && filters.searchTags;

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		if (type === "dlc") {
			setFilters({
				...filters,
				searchTags: !isActive,
				search: isActive ? "" : tag
			});

			return;
		}

		if (type === "missable") {
			setFilters({
				...filters,
				missables: filters.missables === MissableOption.SHOW_ONLY ? MissableOption.DEFAULT : MissableOption.SHOW_ONLY
			});

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
			{searchTags ? highlightText(tag, match) : tag}
		</span>
	);
}
