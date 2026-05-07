import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import Image, { StaticImageData } from "next/image";

type Props = {
	icon: StaticImageData;
	value: number;
};

export function RewardCurrency({ icon, value }: Props) {
	const styles = questModalVariants["witcher3"];

	return (
		<div className={styles.rewards.currency.base()}>
			<Image src={icon} alt='currency' unoptimized />

			<span className={styles.rewards.currency.value()}>{value}</span>
		</div>
	);
}
