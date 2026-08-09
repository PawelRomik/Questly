import background from "../../../public/assets/background.png";
import HubNavbar from "@/app/components/navbar/HubNavbar";
import OtherGamesSection from "@/app/components/game-preview/OtherGamesSection";
import Line from "@/app/components/common/Line";
import MainSection from "@/app/components/game-preview/MainSection";
import { getLocalizedList } from "@/app/hooks/getLocalizedList";
import { GET_GAMES_SHOWCASE } from "@/app/lib/queries";
import { cookies } from "next/headers";

export async function generateMetadata() {
	return {
		title: "Questly"
	};
}

export type Game = {
	slug: string;
	title: string;
	description: string;
	background: string;
	logo: string;
};

type PageProps = {
	params: Promise<{
		locale: string;
		game: string;
	}>;
};

export default async function Home({ params }: PageProps) {
	const { locale, game } = await params;

	const cookieStore = await cookies();

	const lastUsedGame = cookieStore.get("lastUsedGame")?.value;

	const games = await getLocalizedList<Game, Record<string, never>>({
		locale,
		query: GET_GAMES_SHOWCASE,
		vars: {},
		getItems: (data) => data.games,
		getId: (game) => game.slug
	});

	const foundGame = games.find((g) => g.slug === lastUsedGame);

	const selectedGame = foundGame ?? games[0];

	const isLastUsed = !!foundGame;

	return (
		<div style={{ backgroundImage: `url(${background.src})` }} className='flex zoomHeight flex-col gap-5 overflow-y-scroll pb-5'>
			<HubNavbar game={game} />
			<MainSection selectedGame={selectedGame} isLastUsed={isLastUsed} />
			<Line />
			<OtherGamesSection games={games} />
		</div>
	);
}
