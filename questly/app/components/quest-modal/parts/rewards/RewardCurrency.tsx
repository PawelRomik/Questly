import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";
import { StaticImageData } from "next/image";

type Props = {
	icon: string | StaticImageData;
	value: number;
	game?: string;
};

export function RewardCurrency({ icon, value, game }: Props) {
	const theme = getTheme("questModal", game);
	if (value < 1) return;
	return (
		<div className={theme.rewards.currency.base()}>
			<FixedImage src={icon} className={theme.rewards.currency.icon()} alt='currency' />

			<span className={theme.rewards.currency.value()}>{value}</span>
		</div>
	);
}
