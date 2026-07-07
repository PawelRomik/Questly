"use client";
import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

export default function AchievementHidden() {
	const styles = useGameStyles(achievementVariants);
	const t = useTranslations("achievements");
	return <div className={styles.hidden()}>{t("hiddenClick")}</div>;
}
