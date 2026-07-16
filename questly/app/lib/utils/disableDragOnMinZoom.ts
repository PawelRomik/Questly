import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function DisableDragOnMinZoom() {
	const map = useMap();

	useEffect(() => {
		const update = () => {
			if (map.getZoom() === map.getMinZoom()) {
				map.dragging.disable();
			} else {
				map.dragging.enable();
			}
		};

		update();
		map.on("zoomend", update);

		return () => {
			map.off("zoomend", update);
		};
	}, [map]);

	return null;
}
