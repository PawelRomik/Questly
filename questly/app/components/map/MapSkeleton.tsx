import { getTheme } from "@/app/lib/utils/getTheme";

export default function MapSkeleton() {
	const theme = getTheme("map");

	return (
		<div className={theme.map.container()}>
			<div className='absolute inset-0 bg-[#090909]' />

			<div
				className='
					absolute
					inset-0
					bg-linear-to-b
					from-[#1a1a1a]
					to-[#0b0b0b]
					
				'
			/>
		</div>
	);
}
