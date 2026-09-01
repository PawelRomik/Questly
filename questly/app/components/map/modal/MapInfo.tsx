"use client";
import { Suspense } from "react";

import { MapInfoSkeleton } from "@/app/components/map/modal/MapInfoSkeleton";
import MapInfoContent from "@/app/components/map/modal/MapInfoContent";

export type MapInfoProps = {
	selectedQuest: boolean;
	title: string;
	uuid?: string;
	markerUuid: string;
	icon: string;
	isQuestMarker: boolean;
	game: string;
};

export default function MapInfo(props: MapInfoProps) {
	return (
		<Suspense fallback={<MapInfoSkeleton game={props.game} />}>
			<MapInfoContent {...props} />
		</Suspense>
	);
}
