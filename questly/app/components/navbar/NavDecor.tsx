import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	game?: string;
};

export function NavDecor({ game }: Props) {
	const theme = getTheme("navbar", game);
	return (
		<div className={theme.decor.base()}>
			<div className={theme.decor.layout()} />
		</div>
	);
}
