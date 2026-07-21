import { mapVariants } from "@/app/components/map/variant/mapVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

export default function MapInfoButton() {
	const styles = useGameStyles(mapVariants);
	const t = useTranslations("map");

	return <button className={styles.info.button()}>{t("show")}</button>;
}
