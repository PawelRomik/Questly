import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import ReactMarkdown from "react-markdown";

type Props = {
	description: string;
};

export function QuestDescription({ description }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<div className={styles.content.description()}>
			<ReactMarkdown>{description}</ReactMarkdown>
		</div>
	);
}
