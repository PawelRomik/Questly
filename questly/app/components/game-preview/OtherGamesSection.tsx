import GamePreview from "@/app/components/game-preview/GamePreview";
import Label from "@/app/components/game-preview/Label";

export default function OtherGamesSection() {
	return (
		<div className='w-full  h-full gap-3 px-5 flex  flex-col justify-around flex-1 '>
			<Label text='Other Games' />
			<div className='grid w-full h-full grid-cols-3 gap-10'>
				<GamePreview />
				<GamePreview />
				<GamePreview />
			</div>
		</div>
	);
}
