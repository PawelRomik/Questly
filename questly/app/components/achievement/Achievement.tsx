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

type Props = {
	achievement: AchievementType;
	completed: boolean;
	search: string;
	onToggle: () => void;
};

export default function Achievement({ achievement, completed, search, onToggle }: Props) {
	const [revealed, setRevealed] = useState(completed);
	const { secret, icon } = achievement;
	const styles = useGameStyles(achievementVariants);

	const isSecretLocked = secret && !completed;
	const isHidden = isSecretLocked && !revealed;

	const handleReveal = () => {
		if (isSecretLocked) setRevealed(true);
	};

	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		onToggle();
	};
	const { achievement_icon } = useGameAssets();

	return (
		<div onClick={handleReveal} className={styles.achievement(completed)}>
			{isHidden && <AchievementHidden />}

			<AchievementImage completed={completed} src={icon?.url ?? achievement_icon} />

			<AchievementContent search={search} revealed={revealed} achievement={achievement} completed={completed} />

			<AchievementButton completed={completed} onClick={handleToggle} />
		</div>
	);
}
