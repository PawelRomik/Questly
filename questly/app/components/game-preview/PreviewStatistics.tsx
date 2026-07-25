import { StatisticList } from "@/app/components/statistics/StatisticsList";

export default function PreviewStatistics() {
	return (
		<div
			className='
					flex-2
					w-full
					border-b
					border-[#00e0ff]/20
					bg-linear-to-b
					from-[#10131d]
					to-[#06080d]
				'
		>
			<StatisticList />
		</div>
	);
}
