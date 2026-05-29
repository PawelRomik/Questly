import FixedImage from "@/app/components/common/FixedImage";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { StaticImageData } from "next/image";

type Props = {
	value: string | number;
	icon: string | StaticImageData;
	alt: string;
};

export function QuestRewardItem({ value, icon, alt }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<span className={styles.rewards.item()}>
			{value}

			<FixedImage src={icon} alt={alt} className={styles.rewards.icon()} />
		</span>
	);
}
