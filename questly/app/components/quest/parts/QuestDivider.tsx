import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export function QuestDivider({ game }: Props) {
	const theme = getTheme("quest", game);
	return <div className={theme.divider()} />;
}
