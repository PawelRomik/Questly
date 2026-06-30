"use client";

import { useState } from "react";
import { AchievementButton } from "@/app/components/achievement/content/AchievementButton";
import { AchievementContent } from "@/app/components/achievement/content/AchievementContent";
import { AchievementImage } from "@/app/components/achievement/image/AchievementImage";
import AchievementHidden from "@/app/components/achievement/content/AchievementHidden";
import { AchievementType } from "@/app/types/achievement";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { HiddenAchievementsOption } from "@/app/components/filters/types";
import { useFilters } from "@/app/context/FiltersContext";
import { motion } from "framer-motion";

type Props = {
	achievement: AchievementType;
	completed: boolean;

	onToggle: () => void;
};

export default function Achievement({ achievement, completed, onToggle }: Props) {
	const { filters } = useFilters();
	const [revealed, setRevealed] = useState(completed || filters.hiddenAchievements === HiddenAchievementsOption.REVEAL);
	const { secret, icon } = achievement;
	const styles = useGameStyles(achievementVariants);

	const isSecretLocked = secret && !completed;

	const isHidden = isSecretLocked && !revealed;

	const handleReveal = () => {
		if (isSecretLocked) {
			setRevealed(true);
		}
	};

	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		onToggle();
	};
	const { achievement_icon } = useGameAssets();

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: -5 },
				visible: { opacity: 1, y: 0 }
			}}
			transition={{ type: "spring", stiffness: 300, damping: 25 }}
			whileTap={{ scale: 0.97 }}
			layout
			onClick={handleReveal}
		>
			<div className={styles.achievement(completed)}>
				{isHidden && <AchievementHidden />}

				<AchievementImage completed={completed} src={icon?.url ?? achievement_icon} />

				<AchievementContent revealed={revealed} achievement={achievement} completed={completed} />

				<AchievementButton completed={completed} onClick={handleToggle} />
			</div>
		</motion.div>
	);
}
