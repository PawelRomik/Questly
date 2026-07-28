"use client";
import FixedImage from "@/app/components/common/FixedImage";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	name: string;
	src: string;
	completed: boolean;
	onClick: () => void;
	missable: boolean;
	game?: string;
};

export function CollectionItem({ name, src, completed, onClick, missable, game }: Props) {
	const { missable_icon } = useGameAssets();
	const t = useTranslations("tags");
	const theme = getTheme("collection", game);

	return (
		<div onClick={onClick} className={theme.collection.item.base(completed)}>
			<div className={theme.collection.item.wrapper()}>
				<FixedImage src={src} alt={name} className={theme.collection.item.image()} />
				{missable && <FixedImage src={missable_icon} alt={t("missable")} className={theme.collection.item.missableIcon()} />}
			</div>
		</div>
	);
}
