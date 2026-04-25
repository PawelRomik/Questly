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
					w-full h-full shadow-2xl scale-x-150
					border-b-4 border-[#c97a00]
					${isLeft ? "rotate-30 origin-bottom-right" : "-rotate-30 origin-bottom-left"}
					bg-linear-to-b from-[#202020] to-[#161616]
			
					transition
				
				`}
			/>
		</div>
	);
}
