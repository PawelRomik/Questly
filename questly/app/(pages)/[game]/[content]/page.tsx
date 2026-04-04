import { SearchBar } from "@/app/components/filters/SearchBar";
import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
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
	return (
		<div className='flex flex-col gap-5 h-screen overflow-y-scroll bg-[repeating-linear-gradient(0deg,#09090b,#09090b_4px,#18181b_4px,#18181b_40px)]'>
			<Navbar />

			<SearchBar />

			<QuestList />
		</div>
	);
}
