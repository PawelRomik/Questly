import { getTheme } from "@/app/lib/utils/getTheme";

const pulse = "animate-pulse bg-white/5";

type Props = {
	game: string;
};

export function MapInfoSkeleton({ game }: Props) {
	const theme = getTheme("map", game);

	return (
		<div className={theme.info.container()}>
			<div className={`${theme.info.icon()} ${pulse}`} />
			<div className={`h-4 w-20 ${pulse}`} />
		</div>
	);
}
