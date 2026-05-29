import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { StaticImageData } from "next/image";

export function ModalCharacter({ src }: { src: string | StaticImageData }) {
	const styles = useGameStyles(questModalVariants);
	return (
		<div className={styles.character.wrapper()}>
			<div className={styles.character.container()}>
				<FixedImage src={src} alt='portrait' className={styles.character.image()} />
			</div>
		</div>
	);
}
