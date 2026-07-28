import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	level: number;
	game?: string;
};

export function RequirementLevel({ level, game }: Props) {
	const theme = getTheme("questModal", game);
	const t = useTranslations("common");
	return (
		<div className={theme.requirements.tag()}>
			<span className={theme.requirements.primary()}>{t("level")}</span>

			<span className={theme.requirements.secondary()}>{level}</span>
		</div>
	);
}
