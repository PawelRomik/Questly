import GameClient from "@/app/components/clients/GameClient";
import { formatName } from "@/app/lib/utils/formatName";

type Props = {
	params: Promise<{
		game: string;
	}>;
};

export async function generateMetadata({ params }: Props) {
	const { game } = await params;

	return {
		title: `Questly | ${formatName(game)} Quests`
	};
}

export default function GamePage() {
	return <GameClient />;
}
