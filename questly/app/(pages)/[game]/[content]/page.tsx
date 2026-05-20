import GamePageClient from "@/app/components/GamePageClient";
import { formatName } from "@/app/lib/utils/formatName";

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

export default function GamePage() {
	return <GamePageClient />;
}
