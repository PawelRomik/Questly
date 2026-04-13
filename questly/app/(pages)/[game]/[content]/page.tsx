import AchievementList from "@/app/components/achievement/AchievementList";
import { SearchBar } from "@/app/components/filters/SearchBar";
import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
import { formatName } from "@/app/lib/utils/formatName";

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
	const { content } = await params;

	return (
		<div className='h-screen flex flex-col bg-[repeating-linear-gradient(0deg,#09090b,#09090b_4px,#18181b_4px,#18181b_40px)] overflow-hidden'>
			<Navbar />

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
