import { useEffect } from "react";
import L from "leaflet";

export function useLeafletTileFix() {
	useEffect(() => {
		// @ts-expect-error Leaflet exposes _initTile at runtime, but it's not in the typings
		const originalInitTile = L.GridLayer.prototype._initTile;

		L.GridLayer.include({
			_initTile(tile: HTMLElement) {
				originalInitTile.call(this, tile);

				const tileSize = this.getTileSize();

				tile.style.width = `${tileSize.x + 1}px`;
				tile.style.height = `${tileSize.y + 1}px`;
			}
		});

		return () => {
			// @ts-expect-error Leaflet exposes _initTile at runtime, but it's not in the typings
			L.GridLayer.prototype._initTile = originalInitTile;
		};
	}, []);
}
