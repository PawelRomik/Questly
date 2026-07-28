"use client";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	game?: string;
};

export default function AchievementHidden({ game }: Props) {
	const t = useTranslations("achievements");
	const theme = getTheme("achievement", game);
	return <div className={theme.hidden()}>{t("hiddenClick")}</div>;
}
