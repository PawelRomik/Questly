import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	completed: boolean;
	game?: string;
};

export function CollectionAccent({ completed, game }: Props) {
	const theme = getTheme("collection", game);
	return (
		<div className={theme.accent.wrapper()}>
			<div className={theme.accent.bar(completed)} />
			<div className={theme.accent.glow(completed)} />
		</div>
	);
}
