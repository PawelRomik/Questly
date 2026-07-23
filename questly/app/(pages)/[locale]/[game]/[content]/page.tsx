import GamePageClient from "@/app/components/GamePageClient";
import { client } from "@/app/lib/apollo";
import { GET_GAMES } from "@/app/lib/queries";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
	params: {
		game: string;
		content: string;
		locale: string;
	};
};

export async function generateMetadata({ params }: Props) {
	const { game, content, locale } = await params;

	const { data } = await client.query<
		{
			games: {
				slug: string;
				title: string;
			}[];
		},
		{
			locale: string;
		}
	>({
		query: GET_GAMES,
		variables: {
			locale
		}
	});

	const t = await getTranslations({
		locale,
		namespace: "nav"
	});

	const selectedGame = data?.games.find(({ slug }) => slug === game);
	const title = selectedGame?.title ?? "";

	return {
		title: `Questly | ${title} ${t(content)}`
	};
}

export default function GamePage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = use(params);
	setRequestLocale(locale);
	return <GamePageClient />;
}
