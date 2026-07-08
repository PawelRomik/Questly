import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

type Props = {
	level: number;
};

export function RequirementLevel({ level }: Props) {
	const styles = useGameStyles(questModalVariants);
	const t = useTranslations("common");
	return (
		<div className={styles.requirements.tag.base()}>
			<span className={styles.requirements.tag.primary()}>{t("level")}</span>

			<span className={styles.requirements.tag.secondary()}>{level}</span>
		</div>
	);
}
