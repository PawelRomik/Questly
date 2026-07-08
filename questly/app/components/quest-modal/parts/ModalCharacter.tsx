import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

export function ModalCharacter({ src }: { src: string | StaticImageData }) {
	const styles = useGameStyles(questModalVariants);
	const t = useTranslations("common");
	return (
		<div className={styles.character.wrapper()}>
			<div className={styles.character.container()}>
				<FixedImage src={src} alt={t("character")} className={styles.character.image()} />
			</div>
		</div>
	);
}
