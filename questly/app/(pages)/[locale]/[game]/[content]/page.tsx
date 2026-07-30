import GamePageClient from "@/app/components/GamePageClient";
import { getLocalizedList } from "@/app/hooks/getLocalizedList";
import { GET_GAMES } from "@/app/lib/queries";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{
		locale: string;
		game: string;
		content: string;
	}>;
};

const validContent = ["achievements", "quests", "collectibles", "map"];

async function getGame(locale: string, game: string) {
	try {
		const games = await getLocalizedList<
			{
				slug: string;
				title: string;
			},
			Record<string, never>
		>({
			locale,
			query: GET_GAMES,
			vars: {},
			getItems: (data) => data.games,
			getId: (game) => game.slug
		});

		return games.find((g) => g.slug === game) ?? null;
	} catch (error) {
		console.error("Failed to fetch games:", error);
		throw error;
	}
}

export async function generateMetadata({ params }: Props) {
	const { game, content, locale } = await params;

	const t = await getTranslations({
		locale
	});

	const selectedGame = await getGame(locale, game);

	if (!selectedGame || !validContent.includes(content)) {
		return {
			title: `Questly | ${t("notFound.title")}`
		};
	}

	return {
		title: `Questly | ${selectedGame?.title ?? ""} ${t(`nav.${content}`)}`
	};
}

export default async function GamePage({ params }: Props) {
	const { locale, game, content } = await params;

	const selectedGame = await getGame(locale, game);

	if (!selectedGame || !validContent.includes(content)) {
		notFound();
	}

	setRequestLocale(locale);

	return <GamePageClient game={game} />;
}
