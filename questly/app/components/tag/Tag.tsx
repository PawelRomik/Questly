"use client";

import { MissableOption } from "@/app/components/filters/types";
import { useFilters } from "@/app/context/FiltersContext";
import { getTheme } from "@/app/lib/utils/getTheme";
import { highlightText } from "@/app/lib/utils/highlightText";
import { getIsActive } from "@/app/lib/utils/tags/getIsActive";
import { getTagStyle } from "@/app/lib/utils/tags/getTagStyle";

export type TagProps = {
	tag: string;
	searchTags: boolean;
	type?: "tag" | "dlc" | "missable";
	color?: string;
	match?: readonly [number, number][];
	game?: string;
	dlc?: string;
};

export function Tag({ tag, match, searchTags, type, color, dlc, game }: TagProps) {
	const { filters, setFilters } = useFilters();
	const theme = getTheme("tag", game);

	const isActive = getIsActive({ tag, searchTags, type, color, dlc, game }, filters);

	const handleDlcClick = () => {
		setFilters({ ...filters, dlc: dlc === filters.dlc ? "all" : (dlc ?? "all") });
	};

	const handleMissableClick = () => {
		setFilters({
			...filters,
			missables: filters.missables === MissableOption.SHOW_ONLY ? MissableOption.DEFAULT : MissableOption.SHOW_ONLY
		});
	};

	const handleTagClick = () => {
		setFilters({ ...filters, search: isActive ? "" : tag, searchTags: !isActive });
	};

	const clickHandlers: Record<NonNullable<TagProps["type"]>, () => void> = {
		dlc: handleDlcClick,
		missable: handleMissableClick,
		tag: handleTagClick
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		clickHandlers[type ?? "tag"]();
	};

	return (
		<span onClick={onClick} style={getTagStyle(color, isActive)} className={`${theme.tag(isActive)} ${!isActive && color ? "hover:border-(--tag-hover-border)!" : ""}`}>
			{searchTags ? highlightText(tag, match) : tag}
		</span>
	);
}
