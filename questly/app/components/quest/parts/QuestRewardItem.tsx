import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";
import { StaticImageData } from "next/image";

type Props = {
	value: string | number;
	icon: string | StaticImageData;
	alt: string;
	game?: string;
};

export function QuestRewardItem({ value, icon, alt, game }: Props) {
	const theme = getTheme("quest", game);
	return (
		<span className={theme.rewards.item()}>
			{value}

			<FixedImage src={icon} alt={alt} className={theme.rewards.icon()} />
		</span>
	);
}
