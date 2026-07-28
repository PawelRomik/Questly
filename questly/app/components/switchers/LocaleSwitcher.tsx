"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/app/data/locales";
import SwitcherDialog from "@/app/components/switchers/SwitcherDialog";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import SwitcherSearch from "@/app/components/switchers/SwitcherSearch";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export default function LocaleSwitcher({ game }: Props) {
	const locale = useLocale();
	const [search, setSearch] = useState("");
	const pathname = usePathname();
	const t = useTranslations("switchers");

	const currentLocale = LOCALES.find((l) => l.code === locale)!;
	const theme = getTheme("switcher", game);

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
		<SwitcherDialog game={game} trigger={<span className={theme.switcher.flagTrigger(currentLocale.flag)} />} title={t("selectLocale")}>
			<SwitcherSearch game={game} search={search} setSearch={setSearch} />

			<div className={theme.switcher.grid()}>
				{filteredLocales.map((item) => (
					<Link key={item.code} href={pathname.replace(`/${locale}`, `/${item.code}`)} className={theme.switcher.link(item.code === locale)}>
						<span className={theme.switcher.flag(item.flag)} />
						<span className={theme.switcher.label()}>{item.name}</span>
					</Link>
				))}
			</div>
		</SwitcherDialog>
	);
}
