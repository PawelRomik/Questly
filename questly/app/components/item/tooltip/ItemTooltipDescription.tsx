import { getTheme } from "@/app/lib/utils/getTheme";
import ReactMarkdown from "react-markdown";

type Props = {
	description: string;
	game?: string;
};

export function ItemTooltipDescription({ description, game }: Props) {
	const theme = getTheme("item", game);
	return (
		<div className={theme.tooltip.description()}>
			<ReactMarkdown>{description}</ReactMarkdown>
		</div>
	);
}
