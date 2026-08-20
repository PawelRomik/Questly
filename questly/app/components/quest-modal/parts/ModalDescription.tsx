import ReactMarkdown from "react-markdown";

import { getTheme } from "@/app/lib/utils/getTheme";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useTranslations } from "next-intl";
import FixedImage from "@/app/components/common/FixedImage";

type Props = {
	desc: string;
	game?: string;
};

export function ModalDescription({ desc, game }: Props) {
	const theme = getTheme("questModal", game);
	const t = useTranslations();
	const { missable_color, missable_icon } = useGameAssets();

	return (
		<div className={theme.description()}>
			<div className='flex items-center'>
				<FixedImage className='h-4 w-auto' src={missable_icon} alt={t("tags.missable")} />
				<p style={{ color: missable_color }}>{t("tags.missable")}</p>
			</div>

			<ReactMarkdown>{desc}</ReactMarkdown>
		</div>
	);
}
