"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/app/data/locales";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { switcherVariants } from "@/app/components/switchers/variant/switcherVariants";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import SwitcherSearch from "@/app/components/switchers/SwitcherSearch";

export default function LocaleSwitcher() {
	const locale = useLocale();
	const [search, setSearch] = useState("");
	const pathname = usePathname();
	const t = useTranslations("switchers");

	const currentLocale = LOCALES.find((l) => l.code === locale)!;
	const styles = useGameStyles(switcherVariants);

	const fuse = useMemo(
		() =>
			new Fuse(LOCALES, {
				keys: ["name", "code"],
				threshold: 0.35,
				ignoreLocation: true,
				minMatchCharLength: 1
			}),
		[]
	);

	const filteredLocales = useMemo(() => {
		const query = search.trim();

		if (!query) return LOCALES;

		const results = fuse.search(query).map((result) => result.item);

		return results.length > 0 ? results : LOCALES;
	}, [fuse, search]);

	return (
		<SwitcherDialog trigger={<span className={styles.switcher.flagTrigger(currentLocale.flag)} />} title={t("selectLocale")}>
			<SwitcherSearch search={search} setSearch={setSearch} />

			<div className={styles.switcher.grid()}>
				{filteredLocales.map((item) => (
					<Link key={item.code} href={pathname.replace(`/${locale}`, `/${item.code}`)} className={styles.switcher.link(item.code === locale)}>
						<span className={styles.switcher.flag(item.flag)} />
						<span className={styles.switcher.label()}>{item.name}</span>
					</Link>
				))}
			</div>
		</SwitcherDialog>
	);
}
