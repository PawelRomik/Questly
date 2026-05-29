import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { StaticImageData } from "next/image";

type Props = {
	icon: string | StaticImageData;
	value: number;
};

export function RewardCurrency({ icon, value }: Props) {
	const styles = useGameStyles(questModalVariants);

	return (
		<div className={styles.rewards.currency.base()}>
			<FixedImage src={icon} className={styles.rewards.currency.icon()} alt='currency' />

			<span className={styles.rewards.currency.value()}>{value}</span>
		</div>
	);
}
