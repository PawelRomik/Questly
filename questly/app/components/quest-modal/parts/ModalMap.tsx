import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

export function ModalMap({ src }: { src: string }) {
	const styles = useGameStyles(questModalVariants);
	return (
		<div className={styles.map.wrapper()}>
			<div className={styles.map.container()}>
				<div className={styles.map.content()}>
					<FixedImage src={src} className={styles.map.image()} alt='map' />
				</div>
			</div>
		</div>
	);
}
