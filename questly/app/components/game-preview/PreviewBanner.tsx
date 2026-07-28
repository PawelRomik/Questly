import { Game } from "@/app/(pages)/[locale]/page";
import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: Game;
};

export default function PreviewBanner({ game }: Props) {
	const theme = getTheme("preview", game.slug);
	return (
		<div
			className={theme.banner.base()}
			style={{
				backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}/${game.background})`
			}}
		>
			<div className={theme.banner.overlay()} />

			<div className={theme.banner.container()}>
				<FixedImage src={game.logo} className={theme.banner.logo()} alt={game.title} />

				<h2 className={theme.banner.title()}>{game.title}</h2>
			</div>
		</div>
	);
}
