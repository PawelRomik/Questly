import dynamic from "next/dynamic";
import MapSkeleton from "@/app/components/map/MapSkeleton";

const GameMapContainer = dynamic(() => import("./GameMap"), {
	ssr: false,
	loading: () => <MapSkeleton />
});
export { GameMapContainer };
