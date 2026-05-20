"use client";

import { NavButton } from "./NavButton";
import { useParams } from "next/navigation";
import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import FixedImage from "@/app/components/common/FixedImage";
type Props = {
	side: "left" | "right";
};

export function NavMenu({ side }: Props) {
	const isLeft = side === "left";
	const params = useParams();
	const game = params.game as string;
	const styles = useGameStyles(navbarVariants);
	const { nav_icons } = useGameAssets();

	return (
		<div className={styles.menu.base()}>
			{isLeft ? (
				<>
					<NavButton id={0} href={`/${game}/quests`}>
						<FixedImage src={nav_icons[0]?.url || ""} alt='alt' className={styles.menu.item()} />
						<span className={styles.menu.label()}>Quests</span>
					</NavButton>

					<NavButton id={1} href={`/${game}/collectibles`}>
						<FixedImage src={nav_icons[1]?.url || ""} alt='alt' className={styles.menu.item()} />
						<span className={styles.menu.label()}>Collectibles</span>
					</NavButton>
				</>
			) : (
				<>
					<NavButton id={2} href={`/${game}/map`}>
						<FixedImage src={nav_icons[2]?.url || ""} alt='alt' className={styles.menu.item()} />
						<span className={styles.menu.label()}>Map</span>
					</NavButton>

					<NavButton id={3} href={`/${game}/achievements`}>
						<FixedImage src={nav_icons[3]?.url || ""} alt='alt' className={styles.menu.item()} />
						<span className={styles.menu.label()}>Achievements</span>
					</NavButton>
				</>
			)}
		</div>
	);
}
