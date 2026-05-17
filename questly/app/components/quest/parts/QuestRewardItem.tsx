import { questVariants } from "@/app/components/quest/variant/questVariants";
import Image, { StaticImageData } from "next/image";

type Props = {
	value: string | number;
	icon: StaticImageData;
	alt: string;
};

export function QuestRewardItem({ value, icon, alt }: Props) {
	const styles = questVariants["witcher3"];
	return (
		<span className={styles.rewards.item()}>
			{value}

			<Image src={icon} alt={alt} className={styles.rewards.icon()} />
		</span>
	);
}
