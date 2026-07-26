import { switcherVariants } from "@/app/components/switchers/variant/switcherVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";

type Props = {
	search: string;
	setSearch: (val: string) => void;
};

export default function SwitcherSearch({ search, setSearch }: Props) {
	const styles = useGameStyles(switcherVariants);
	const t = useTranslations("switchers");

	return (
		<div className={styles.switcher.searchbar.container()}>
			<input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t("search")} className={styles.switcher.searchbar.input()} />
		</div>
	);
}
