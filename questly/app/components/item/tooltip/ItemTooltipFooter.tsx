import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	price: number;
	game?: string;
};

export function ItemTooltipFooter({ price, game }: Props) {
	const { currency_icon } = useGameAssets();
	const t = useTranslations("common");
	const theme = getTheme("item", game);

	return (
		<div className={theme.tooltip.footer()}>
			<span className={theme.tooltip.rewards.base()}>
				<FixedImage src={currency_icon || ""} alt={t("currency")} className={theme.tooltip.rewards.icon()} /> {price}
			</span>
			<span>{game}</span>
		</div>
	);
}
