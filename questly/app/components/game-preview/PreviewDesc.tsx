import { Game } from "@/app/(pages)/[locale]/page";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: Game;
};

export default function PreviewDesc({ game }: Props) {
	const theme = getTheme("preview", game.slug);

	return (
		<div className={theme.description.base()}>
			<p className={theme.description.text()}>{game.description}</p>
		</div>
	);
}
