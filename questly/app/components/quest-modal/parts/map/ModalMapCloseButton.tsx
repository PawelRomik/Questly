import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	setMapStateVisible: (val: boolean) => void;
};

export default function ModalMapCloseButton({ setMapStateVisible }: Props) {
	const styles = useGameStyles(questModalVariants);

	return (
		<button type='button' onClick={() => setMapStateVisible(false)} className={styles.closeButton()}>
			✕
		</button>
	);
}
