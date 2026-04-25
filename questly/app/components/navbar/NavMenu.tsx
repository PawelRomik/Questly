"use client";
import { themeProps } from "@/app/components/navbar/types";
import { NavButton } from "./NavButton";
import { useParams } from "next/navigation";
import aard from "../../../public/assets/aard.webp";
import igni from "../../../public/assets/igni.webp";
import axii from "../../../public/assets/axii.webp";
import yrden from "../../../public/assets/yrden.webp";
import Image from "next/image";
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
		<div className='flex-2 flex items-center justify-around h-full text-white'>
			{isLeft ? (
				<>
					<NavButton sign='aard' href={`/${game}/quests`} theme={theme} side='left' activeSide={active} setActive={setActive} border='right'>
						<Image src={aard} alt='alt' unoptimized className='w-12.5 z-30 h-12.5' />
						<span className='z-30'>Quests</span>
					</NavButton>

					<NavButton sign='igni' href={`/${game}/collectibles`} theme={theme} border='right' activeSide={active} setActive={setActive}>
						<Image src={igni} alt='alt' unoptimized className='w-12.5 h-12.5 z-30' />
						<span className='z-30'>Collectibles</span>
					</NavButton>
				</>
			) : (
				<>
					<NavButton sign='axii' href={`/${game}/map`} theme={theme} border='left' activeSide={active} setActive={setActive}>
						<Image src={axii} alt='alt' unoptimized className='w-12.5 h-12.5 z-30' />
						<span className='z-30'>Map</span>
					</NavButton>

					<NavButton sign='yrden' href={`/${game}/achievements`} theme={theme} side='right' activeSide={active} setActive={setActive} border='left'>
						<Image src={yrden} alt='alt' unoptimized className='w-12.5 h-12.5 z-30' />
						<span className='z-30'>Achievements</span>
					</NavButton>
				</>
			)}
		</div>
	);
}
