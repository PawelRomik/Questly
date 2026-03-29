import { themeProps } from "@/app/components/navbar/types";

type Props = {
	side: "left" | "right";
	active: "left" | "right" | null;
	theme: themeProps;
};

export function NavDecor({ side, active, theme }: Props) {
	const isLeft = side === "left";

	return (
		<div className='w-32 h-full overflow-hidden'>
			<div
				className={`
					w-full h-full border-b-4 scale-x-150
					${isLeft ? "rotate-30 origin-bottom-right" : "-rotate-30 origin-bottom-left"}
					${theme.bg}
					${theme.border}
					transition
					${active === side ? "brightness-150" : ""}
				`}
			/>
		</div>
	);
}
