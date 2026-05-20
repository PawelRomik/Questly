"use client";

import { NavButton } from "./NavButton";
import { useParams } from "next/navigation";
import aard from "../../../public/assets/aard.webp";
import igni from "../../../public/assets/igni.webp";
import axii from "../../../public/assets/axii.webp";
import yrden from "../../../public/assets/yrden.webp";
import Image from "next/image";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
type Props = {
	side: "left" | "right";
};

export function NavMenu({ side }: Props) {
	const isLeft = side === "left";
	const params = useParams();
	const game = params.game as string;
	const styles = navbarVariants["witcher3"];

	return (
		<div className={styles.menu.base()}>
			{isLeft ? (
				<>
					<NavButton id={0} href={`/${game}/quests`}>
						<Image src={aard} alt='alt' unoptimized className={styles.menu.item()} />
						<span className={styles.menu.label()}>Quests</span>
					</NavButton>

					<NavButton id={1} href={`/${game}/collectibles`}>
						<Image src={igni} alt='alt' unoptimized className={styles.menu.item()} />
						<span className={styles.menu.label()}>Collectibles</span>
					</NavButton>
				</>
			) : (
				<>
					<NavButton id={2} href={`/${game}/map`}>
						<Image src={axii} alt='alt' unoptimized className={styles.menu.item()} />
						<span className={styles.menu.label()}>Map</span>
					</NavButton>

					<NavButton id={3} href={`/${game}/achievements`}>
						<Image src={yrden} alt='alt' unoptimized className={styles.menu.item()} />
						<span className={styles.menu.label()}>Achievements</span>
					</NavButton>
				</>
			)}
		</div>
	);
}
