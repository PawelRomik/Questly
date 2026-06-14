import GamePageClient from "@/app/components/GamePageClient";
import { formatName } from "@/app/lib/utils/formatName";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
	params: {
		game: string;
		content: string;
	};
};

export async function generateMetadata({ params }: Props) {
	const { game, content } = await params;

	return {
		title: `Questly | ${formatName(game)} ${formatName(content)}`
	};
}

export default function GamePage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = use(params);
	setRequestLocale(locale);
	return <GamePageClient />;
}
