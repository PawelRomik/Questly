import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

export function ModalMap({ src }: { src: string }) {
	const styles = questModalVariants["witcher3"];
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
