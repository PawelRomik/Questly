import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

type Props = {
	src: string | StaticImageData;
	game?: string;
};

export function ModalCharacter({ src, game }: Props) {
	const t = useTranslations("common");
	const theme = getTheme("questModal", game);
	return (
		<div className={theme.character.wrapper()}>
			<div className={theme.character.container()}>
				<FixedImage src={src} alt={t("character")} className={theme.character.image()} />
			</div>
		</div>
	);
}
