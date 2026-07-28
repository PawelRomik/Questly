import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	game?: string;
};

export default function CompletedTag({ game }: Props) {
	const theme = getTheme("tag", game);
	const t = useTranslations("tags");
	return (
		<div className={theme.completed.wrapper()}>
			<span className={theme.completed.tag()}>{t("completed")}</span>
		</div>
	);
}
