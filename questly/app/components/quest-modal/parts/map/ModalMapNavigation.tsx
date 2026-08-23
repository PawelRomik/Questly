import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game: string;
	currentLocationName?: string;
	locationIndex: number;
	locationsCount: number;
	goToPreviousLocation: () => void;
	goToNextLocation: () => void;
};

export default function ModalMapNavigation({ game, currentLocationName, locationIndex, locationsCount, goToPreviousLocation, goToNextLocation }: Props) {
	const theme = getTheme("questModal", game);

	return (
		<div className={theme.map.nav.base()}>
			<p className={theme.map.nav.title()}>{currentLocationName ? `${currentLocationName}` : ""}</p>

			<div className={theme.map.nav.wrapper()}>
				<button className={theme.map.nav.button()} type='button' onClick={goToPreviousLocation} aria-label='Poprzednia lokacja'>
					&lt;
				</button>

				<span className={theme.map.nav.splitter()}>
					{locationIndex + 1} / {locationsCount}
				</span>

				<button type='button' className={theme.map.nav.button()} onClick={goToNextLocation} aria-label='Następna lokacja'>
					&gt;
				</button>
			</div>
		</div>
	);
}
