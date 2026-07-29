import QuestSkeleton from "@/app/components/quest/QuestSkeleton";

type Props = {
	items?: number;
};

export default function QuestListSkeleton({ items = 12 }: Props) {
	return (
		<div className='space-y-3 w-[95%]'>
			{Array.from({ length: items }).map((_, i) => (
				<QuestSkeleton key={i} />
			))}
		</div>
	);
}
