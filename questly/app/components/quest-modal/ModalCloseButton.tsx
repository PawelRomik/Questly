import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { Dialog } from "radix-ui";

export function ModalCloseButton() {
	const styles = questModalVariants["witcher3"];
	return (
		<Dialog.Close asChild>
			<button className={styles.closeButton()}>✕</button>
		</Dialog.Close>
	);
}
