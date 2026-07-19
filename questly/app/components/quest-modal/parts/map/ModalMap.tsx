import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

export function ModalMap({ src, setMapStateVisible }: { src: string | StaticImageData; setMapStateVisible: (val: boolean) => void }) {
	const styles = useGameStyles(questModalVariants);
	const t = useTranslations("map");
	return (
		<div className={styles.map.wrapper()} onClick={() => setMapStateVisible(true)}>
			<div className={styles.map.container()}>
				<div className={styles.map.content()}>
					<FixedImage src={src} className={styles.map.image()} alt={t("map")} />
				</div>
			</div>
		</div>
	);
}
