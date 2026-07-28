import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

type Props = {
	src: string | StaticImageData;
	setMapStateVisible: (val: boolean) => void;
	game?: string;
};

export function ModalMap({ src, setMapStateVisible, game }: Props) {
	const theme = getTheme("questModal", game);
	const t = useTranslations("map");
	return (
		<div className={theme.map.wrapper()} onClick={() => setMapStateVisible(true)}>
			<div className={theme.map.container()}>
				<div className={theme.map.content()}>
					<FixedImage src={src} className={theme.map.image()} alt={t("map")} />
				</div>
			</div>
		</div>
	);
}
