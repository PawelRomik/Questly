type Props = {
	side: "left" | "right";
};

export function NavDecor({ side }: Props) {
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
