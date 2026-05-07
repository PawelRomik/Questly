import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

export function ModalCharacter({ src }: { src: string }) {
	const styles = questModalVariants["witcher3"];
	return (
		<div className={styles.character.wrapper()}>
			<div className={styles.character.container()}>
				<FixedImage src={src} alt='portrait' className={styles.character.image()} />
			</div>
		</div>
	);
}
