"use client";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

type Props = {
	secret: boolean;
	description: string;
	revealed: boolean;
};

export default function AchievementDescription({ secret, description, revealed }: Props) {
	const styles = useGameStyles(achievementVariants);
	const t = useTranslations("achievements");
	return <p className={styles.description}>{secret && !revealed ? t("hidden") : description}</p>;
}
