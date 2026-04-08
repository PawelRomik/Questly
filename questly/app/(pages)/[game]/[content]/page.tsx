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
		<div className='h-screen flex flex-col bg-[repeating-linear-gradient(0deg,#09090b,#09090b_4px,#18181b_4px,#18181b_40px)] overflow-hidden'>
			<Navbar />

			<div className='flex flex-1 overflow-hidden'>
				<div className='w-1/3 p-5 bg-[rgba(0,0,0,0.5)] flex items-start'>
					<SearchBar />
				</div>

				<div className='w-2/3 p-5 flex justify-center overflow-y-auto'>
					<QuestList />
				</div>
			</div>
		</div>
	);
}
