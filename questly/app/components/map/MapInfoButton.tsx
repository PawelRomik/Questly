import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	game?: string;
};

export default function MapInfoButton({ game }: Props) {
	const t = useTranslations("map");
	const theme = getTheme("map", game);

	return <button className={theme.info.button()}>{t("show")}</button>;
}
