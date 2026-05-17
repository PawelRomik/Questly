import { questVariants } from "@/app/components/quest/variant/questVariants";
import ReactMarkdown from "react-markdown";

type Props = {
	description: string;
};

export function QuestDescription({ description }: Props) {
	const styles = questVariants["witcher3"];
	return (
		<div className={styles.content.description()}>
			<ReactMarkdown>{description}</ReactMarkdown>
		</div>
	);
}
