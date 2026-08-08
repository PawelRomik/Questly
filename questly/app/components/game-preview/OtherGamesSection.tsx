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
		<div className='w-full h-full gap-3 lg:px-5 flex flex-col justify-around flex-1'>
			<Label text={t("otherGames")} />

			<div className='flex md:grid w-full h-full gap-2 md:px-2 lg:gap-10 overflow-x-auto grid-cols-3 md:overflow-visible snap-x snap-mandatory md:snap-none'>
				{games.map((game) => (
					<div key={game.slug} className='w-full min-w-full snap-start md:min-w-0'>
						<GamePreview game={game} />
					</div>
				))}
			</div>
		</div>
	);
}
