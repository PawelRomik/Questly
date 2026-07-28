"use client";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	secret: boolean;
	description: string;
	revealed: boolean;
	game?: string;
};

export default function AchievementDescription({ secret, description, revealed, game }: Props) {
	const t = useTranslations("achievements");
	const theme = getTheme("achievement", game);
	return <p className={theme.description()}>{secret && !revealed ? t("hidden") : description}</p>;
}
