import MapQuestModal from "@/app/components/map/MapQuestModal";

type MapInfoProps = {
	selectedQuest: boolean;
	title: string;
	uuid?: string;
};

export default function MapInfo({ selectedQuest, title, uuid }: MapInfoProps) {
	return (
		<div className='absolute bottom-4 left-1/2 z-1000 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/95 px-4 py-3 shadow-xl backdrop-blur'>
			<span className='whitespace-nowrap font-medium text-white'>{title}</span>

			{selectedQuest && uuid && (
				<MapQuestModal
					uuid={uuid}
					trigger={<button className='cursor-pointer rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-500'>Zobacz szczegóły</button>}
				/>
			)}
		</div>
	);
}
