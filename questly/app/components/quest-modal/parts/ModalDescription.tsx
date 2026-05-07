import ReactMarkdown from "react-markdown";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	desc: string;
};

export function ModalDescription({ desc }: Props) {
	const styles = questModalVariants["witcher3"];

	return (
		<div className={styles.description()}>
			<ReactMarkdown>{desc}</ReactMarkdown>
		</div>
	);
}
