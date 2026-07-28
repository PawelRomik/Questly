import { Game } from "@/app/(pages)/[locale]/page";
import GamePreview from "@/app/components/game-preview/GamePreview";
import Label from "@/app/components/game-preview/Label";
import { getTranslations } from "next-intl/server";

type Props = {
	games: Game[];
};

export default async function OtherGamesSection({ games }: Props) {
	const t = await getTranslations("preview");
	return (
		<div className='w-full h-full gap-3 px-5 flex flex-col justify-around flex-1'>
			<Label text={t("otherGames")} />

			<div className='grid w-full h-full grid-cols-3 gap-10'>
				{games.map((game) => (
					<GamePreview key={game.slug} game={game} />
				))}
			</div>
		</div>
	);
}
