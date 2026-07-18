import dynamic from "next/dynamic";

const GameMapContainer = dynamic(() => import("./GameMap"), {
	ssr: false
});

export { GameMapContainer };
