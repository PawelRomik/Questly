"use client";
import { themeProps } from "@/app/components/navbar/types";
import { NavButton } from "./NavButton";
import { useParams } from "next/navigation";

type Props = {
	side: "left" | "right";
	active: "left" | "right" | null;
	setActive: (v: "left" | "right" | null) => void;
	theme: themeProps;
};

export function NavMenu({ side, active, setActive, theme }: Props) {
	const isLeft = side === "left";
	const params = useParams();
	const game = params.game as string;

	return (
		<div className='flex-3 flex items-center justify-around h-full text-white'>
			{isLeft ? (
				<>
					<NavButton href={`/${game}/quests`} theme={theme} side='left' activeSide={active} setActive={setActive} border='right'>
						Quests
					</NavButton>

					<NavButton href={`/${game}/collectibles`} theme={theme} border='right' activeSide={active} setActive={setActive}>
						Collectibles
					</NavButton>
				</>
			) : (
				<>
					<NavButton href={`/${game}/map`} theme={theme} border='left' activeSide={active} setActive={setActive}>
						Map
					</NavButton>

					<NavButton href={`/${game}/achievements`} theme={theme} side='right' activeSide={active} setActive={setActive} border='left'>
						Achievements
					</NavButton>
				</>
			)}
		</div>
	);
}
