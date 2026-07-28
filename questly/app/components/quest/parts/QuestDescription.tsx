import { getTheme } from "@/app/lib/utils/getTheme";
import ReactMarkdown from "react-markdown";

type Props = {
	description: string;
	game?: string;
};

export function QuestDescription({ description, game }: Props) {
	const theme = getTheme("quest", game);
	return (
		<div className={theme.content.description()}>
			<ReactMarkdown>{description}</ReactMarkdown>
		</div>
	);
}
