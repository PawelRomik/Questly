import { NavButton } from "./NavButton";

type Props = {
	side: "left" | "right";
	active: "left" | "right" | null;
	setActive: (v: "left" | "right" | null) => void;
};

export function NavMenu({ side, active, setActive }: Props) {
	const isLeft = side === "left";

	return (
		<div className='flex-3 flex items-center justify-around h-full text-white'>
			{isLeft ? (
				<>
					<NavButton side='left' activeSide={active} setActive={setActive} border='right'>
						Quests
					</NavButton>

					<NavButton border='right' activeSide={active} setActive={setActive}>
						Collectibles
					</NavButton>
				</>
			) : (
				<>
					<NavButton border='left' activeSide={active} setActive={setActive}>
						Map
					</NavButton>

					<NavButton side='right' activeSide={active} setActive={setActive} border='left'>
						...
					</NavButton>
				</>
			)}
		</div>
	);
}
