import FixedImage from "@/app/components/common/FixedImage";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	src: string;
	icon?: string;
};

export function QuestImage({ src, icon }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<div className={styles.image.wrapper()}>
			<div className={styles.image.container()}>
				<FixedImage src={src} className={styles.image.base()} alt='location' />
				<FixedImage alt='icon' src={icon || ""} className={styles.image.icon()} />
			</div>
		</div>
	);
}
