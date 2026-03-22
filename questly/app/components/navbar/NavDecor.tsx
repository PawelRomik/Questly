import { NAV_BG } from "@/app/components/navbar/Navbar";

type Props = {
	side: "left" | "right";
	active: "left" | "right" | null;
};

export function NavDecor({ side, active }: Props) {
	const isLeft = side === "left";

	return (
		<div className='w-32 h-full overflow-hidden'>
			<div
				className={`
					w-full h-full border-b-4 scale-x-150
					${isLeft ? "rotate-30 origin-bottom-right" : "-rotate-30 origin-bottom-left"}
					${NAV_BG}
					transition
					${active === side ? "brightness-150" : ""}
				`}
			/>
		</div>
	);
}
