import { CompletedOption } from "@/app/components/filters/types";
import { useFilters } from "@/app/context/FiltersContext";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	game?: string;
};

export default function CompletedTag({ game }: Props) {
	const theme = getTheme("tag", game);
	const t = useTranslations("tags");
	const { filters, setFilters } = useFilters();
	const isActive = filters.completed === CompletedOption.SHOW_ONLY;

	const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();

		setFilters({
			...filters,
			completed: filters.completed === CompletedOption.SHOW_ONLY ? CompletedOption.DEFAULT : CompletedOption.SHOW_ONLY
		});
	};

	return (
		<div className={theme.completed.wrapper()} onClick={(e) => onClick(e)}>
			<span className={theme.completed.tag(isActive)}>{t("completed")}</span>
		</div>
	);
}
