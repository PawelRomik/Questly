"use client";

import { useCompleted } from "@/app/context/CompletedContext";
import { useFilters } from "@/app/context/FiltersContext";
import Image from "next/image";

export default function MapMarkerLegend() {
	const { filters, setFilters } = useFilters();
	const { completedSet } = useCompleted("witcher3", "mapMarkers");

	const toggleMarker = (title: string) => {
		setFilters((prev) => ({
			...prev,
			mapMarkers: prev.mapMarkers.map((marker) =>
				marker.title === title
					? {
							...marker,
							visible: !marker.visible
						}
					: marker
			)
		}));
	};

	return (
		<div className='grid grid-cols-2 gap-2'>
			{filters.mapMarkers.map((marker) => {
				const completed = marker.uuids.filter((uuid) => completedSet.has(uuid)).length;

				return (
					<button
						key={marker.title}
						type='button'
						onClick={() => toggleMarker(marker.title)}
						className='flex items-center gap-2 rounded-md p-2 hover:bg-neutral-800 transition-colors text-left'
					>
						<Image src={`http://localhost:1337${marker.icon}`} alt={marker.title} width={22} height={22} />

						<div className='flex flex-1 items-center justify-between'>
							<span className={marker.visible ? "" : "line-through opacity-50"}>{marker.title}</span>

							<span className='text-sm text-neutral-400'>
								{completed}/{marker.count}
							</span>
						</div>
					</button>
				);
			})}
		</div>
	);
}
