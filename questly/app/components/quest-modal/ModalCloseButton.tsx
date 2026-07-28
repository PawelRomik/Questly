import { getTheme } from "@/app/lib/utils/getTheme";
import { Dialog } from "radix-ui";

type Props = {
	game?: string;
};

export function ModalCloseButton({ game }: Props) {
	const theme = getTheme("questModal", game);
	return (
		<Dialog.Close asChild>
			<button className={theme.closeButton()}>✕</button>
		</Dialog.Close>
	);
}
