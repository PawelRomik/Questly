import { themeProps } from "@/app/components/navbar/types";

type Props = {
	children: React.ReactNode;
	side?: "left" | "right";
	activeSide?: "left" | "right" | null;
	setActive: (v: "left" | "right" | null) => void;
	border?: "left" | "right";
	theme: themeProps;
};

export function NavButton({ children, side, activeSide, setActive, border, theme }: Props) {
	return (
		<button
			onMouseEnter={() => side && setActive(side)}
			onMouseLeave={() => side && setActive(null)}
			className={`
				${theme.bg}
				${theme.text}
				uppercase px-5 w-full h-full cursor-pointer
				transition
				${border === "left" ? "border-l-4" : ""}
				${border === "right" ? "border-r-4" : ""}
				border-zinc-900
				${activeSide === side ? "brightness-150" : "hover:brightness-150"}
			`}
		>
			{children}
		</button>
	);
}
