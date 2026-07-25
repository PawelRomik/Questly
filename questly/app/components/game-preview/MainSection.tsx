import GamePreview from "@/app/components/game-preview/GamePreview";
import Label from "@/app/components/game-preview/Label";
import PageDescription from "@/app/components/game-preview/PageDescription";

export default function MainSection() {
	return (
		<div className='w-full h-full gap-5 px-5 flex-1 flex'>
			<div className='w-full h-full flex gap-3 flex-1 flex-col'>
				<Label text='Last Used' />
				<GamePreview />
			</div>
			<PageDescription />
		</div>
	);
}
