import ReactMarkdown from "react-markdown";

import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	desc: string;
	game?: string;
};

export function ModalDescription({ desc, game }: Props) {
	const theme = getTheme("questModal", game);

	return (
		<div className={theme.description()}>
			<ReactMarkdown>{desc}</ReactMarkdown>
		</div>
	);
}
