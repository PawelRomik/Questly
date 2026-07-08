import { tagVariants } from "@/app/components/tag/variant/tagVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

export default function CompletedTag() {
	const styles = useGameStyles(tagVariants);
	const t = useTranslations("tags");
	return (
		<div className={styles.completed.wrapper()}>
			<span className={styles.completed.tag()}>{t("completed")}</span>
		</div>
	);
}
