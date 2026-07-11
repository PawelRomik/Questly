"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/app/data/locales";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { switcherVariants } from "@/app/components/switchers/variant/switcherVariants";

export default function LocaleSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const t = useTranslations("common");

	const currentLocale = LOCALES.find((l) => l.code === locale)!;
	const styles = useGameStyles(switcherVariants);

	return (
		<SwitcherDialog trigger={<span className={styles.switcher.flagTrigger(currentLocale.flag)} />} title={t("selectLocale")}>
			<div className={styles.switcher.grid()}>
				{LOCALES.map((item) => (
					<Link key={item.code} href={pathname.replace(`/${locale}`, `/${item.code}`)} className={styles.switcher.link(item.code === locale)}>
						<span className={styles.switcher.flag(item.flag)} />

						<span className={styles.switcher.label()}>{item.name}</span>
					</Link>
				))}
			</div>
		</SwitcherDialog>
	);
}
