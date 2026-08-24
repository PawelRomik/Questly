import adjustColor from "@/app/lib/utils/adjustColor";

export function getTagStyle(color: string | undefined, isActive: boolean): React.CSSProperties | undefined {
	if (!color) return undefined;

	const base: React.CSSProperties = {
		borderColor: color,
		color: "#fff",
		background: `linear-gradient(to bottom, ${adjustColor(color, -30)}, ${adjustColor(color, -120)})`,

		["--tag-hover-border" as string]: adjustColor(color, 50)
	};

	if (!isActive) return base;

	return {
		...base,
		color: adjustColor(color, 120),
		borderColor: adjustColor(color, 50),
		boxShadow: `0 0 8px ${color}55`,
		background: `linear-gradient(to bottom, ${adjustColor(color, -80)}, ${adjustColor(color, -140)})`
	};
}
