import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { Dialog } from "radix-ui";

export function ModalCloseButton() {
	const styles = useGameStyles(questModalVariants);
	return (
		<Dialog.Close asChild>
			<button className={styles.closeButton()}>✕</button>
		</Dialog.Close>
	);
}
