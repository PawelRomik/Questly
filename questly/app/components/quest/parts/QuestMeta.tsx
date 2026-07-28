import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	level: number;
	children: React.ReactNode;
	game?: string;
};

export function QuestMeta({ level, children, game }: Props) {
	const t = useTranslations("common");
	const theme = getTheme("quest", game);
	return (
		<div className={theme.meta.base()}>
			{children}

			<div className={theme.meta.level()}>
				<span className={theme.meta.label()}>{t("levelShort")}</span>

				<p className={theme.meta.value()}>{level}</p>
			</div>
		</div>
	);
}
