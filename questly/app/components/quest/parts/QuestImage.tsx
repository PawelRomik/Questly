import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

type Props = {
	src: string;
	icon: string | StaticImageData;
	game?: string;
};

export function QuestImage({ src, icon, game }: Props) {
	const t = useTranslations();

	const theme = getTheme("quest", game);

	return (
		<div className={theme.image.wrapper()}>
			<div className={theme.image.container()}>
				<FixedImage src={src} className={theme.image.base()} alt={t("common.location")} />
				<FixedImage alt={t("quests.icon")} src={icon} className={theme.image.icon()} />
			</div>
		</div>
	);
}
