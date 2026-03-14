import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";

export default function Game() {
	return (
		<div className='flex flex-col gap-5 h-screen overflow-y-scroll  bg-[repeating-linear-gradient(0deg,#09090b,#09090b_4px,#18181b_4px,#18181b_40px)]'>
			<Navbar />
			<QuestList />
		</div>
	);
}
