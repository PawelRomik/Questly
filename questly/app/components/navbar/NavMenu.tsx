import { themeProps } from "@/app/components/navbar/types";
import { NavButton } from "./NavButton";

type Props = {
	side: "left" | "right";
	active: "left" | "right" | null;
	setActive: (v: "left" | "right" | null) => void;
	theme: themeProps;
};

export function NavMenu({ side, active, setActive, theme }: Props) {
	const isLeft = side === "left";

	return (
		<div className='flex-3 flex items-center justify-around h-full text-white'>
			{isLeft ? (
				<>
					<NavButton theme={theme} side='left' activeSide={active} setActive={setActive} border='right'>
						Quests
					</NavButton>

					<NavButton theme={theme} border='right' activeSide={active} setActive={setActive}>
						Collectibles
					</NavButton>
				</>
			) : (
				<>
					<NavButton theme={theme} border='left' activeSide={active} setActive={setActive}>
						Map
					</NavButton>

					<NavButton theme={theme} side='right' activeSide={active} setActive={setActive} border='left'>
						Achievements
					</NavButton>
				</>
			)}
		</div>
	);
}
