import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	setMapStateVisible: (val: boolean) => void;
	game?: string;
};

export default function ModalMapCloseButton({ setMapStateVisible, game }: Props) {
	const theme = getTheme("questModal", game);

	return (
		<button type='button' onClick={() => setMapStateVisible(false)} className={theme.closeButton()}>
			✕
		</button>
	);
}
