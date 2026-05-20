import ReactMarkdown from "react-markdown";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	desc: string;
};

export function ModalDescription({ desc }: Props) {
	const styles = useGameStyles(questModalVariants);

	return (
		<div className={styles.description()}>
			<ReactMarkdown>{desc}</ReactMarkdown>
		</div>
	);
}
