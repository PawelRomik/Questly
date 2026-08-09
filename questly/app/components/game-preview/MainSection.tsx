import { Game } from "@/app/(pages)/[locale]/page";
import GamePreview from "@/app/components/game-preview/GamePreview";
import Label from "@/app/components/game-preview/Label";
import PageDescription from "@/app/components/game-preview/PageDescription";
import { getTranslations } from "next-intl/server";

type Props = {
	selectedGame: Game;
	isLastUsed: boolean;
};

export default async function MainSection({ selectedGame, isLastUsed }: Props) {
	const t = await getTranslations("preview");
	return (
		<div className='w-full h-full gap-5 lg:px-5  flex-1 flex-col lg:flex-row flex'>
			<div className='w-full h-full flex gap-3 flex-1 flex-col'>
				<Label text={isLastUsed ? t("lastUsed") : t("recommended")} />

				<GamePreview game={selectedGame} />
			</div>

			<PageDescription />
		</div>
	);
}
