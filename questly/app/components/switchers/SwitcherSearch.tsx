import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	search: string;
	setSearch: (val: string) => void;
	game?: string;
};

export default function SwitcherSearch({ search, setSearch, game }: Props) {
	const theme = getTheme("switcher", game);
	const t = useTranslations("switchers");

	return (
		<div className={theme.switcher.searchbar.container()}>
			<input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t("search")} className={theme.switcher.searchbar.input()} />
		</div>
	);
}
