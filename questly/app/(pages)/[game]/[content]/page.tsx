import AchievementList from "@/app/components/achievement/AchievementList";
import { SearchBar } from "@/app/components/filters/SearchBar";
import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
import { GAME_THEME } from "@/app/data/games";
import { formatName } from "@/app/lib/utils/formatName";

import Image from "next/image";

type Props = {
	params: Promise<{
		game: string;
		content: string;
	}>;
};

export async function generateMetadata({ params }: Props) {
	const { game, content } = await params;

	return {
		title: `Questly | ${formatName(game)} ${formatName(content)}`
	};
}

export default async function GamePage({ params }: Props) {
	const { content, game } = await params;
	const background = GAME_THEME[game as keyof typeof GAME_THEME].background;

	return (
		<div className='h-screen flex relative flex-col bg-[rgba(0,0,0,0.8)] overflow-hidden'>
			<Navbar />
			<Image src={background} alt='background' fill className='object-cover -z-10' priority />
			<div className='flex flex-1 overflow-hidden'>
				<div className='w-1/3 p-5 bg-[rgba(0,0,0,0.5)] flex items-start'>
					<SearchBar />
				</div>

				<div className='w-2/3 p-5 flex justify-center overflow-y-auto'>
					{content === "quests" && <QuestList />}
					{content === "achievements" && <AchievementList />}
				</div>
			</div>
		</div>
	);
}
