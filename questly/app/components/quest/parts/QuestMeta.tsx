import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

type Props = {
	level: number;
	children: React.ReactNode;
};

export function QuestMeta({ level, children }: Props) {
	const styles = useGameStyles(questVariants);
	const t = useTranslations("common");
	return (
		<div className={styles.meta.base()}>
			{children}

			<div className={styles.meta.level()}>
				<span className={styles.meta.label()}>{t("levelShort")}</span>

				<p className={styles.meta.value()}>{level}</p>
			</div>
		</div>
	);
}
