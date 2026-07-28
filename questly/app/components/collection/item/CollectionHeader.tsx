import FixedImage from "@/app/components/common/FixedImage";
import ProgressBar from "@/app/components/section/ProgressBar";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { getTheme } from "@/app/lib/utils/getTheme";
import { highlightText } from "@/app/lib/utils/highlightText";
import { CollectionWithMatches } from "@/app/types/collection";
import { DLC } from "@/app/types/quest";

type Props = {
	completed: number;
	total: number;
	dlcs?: DLC[];
	hasMissable: boolean;
	collection: CollectionWithMatches;
	game?: string;
};

export function CollectionHeader({ collection, completed, dlcs, total, hasMissable, game }: Props) {
	const { missable_logo } = useGameAssets();
	const theme = getTheme("collection", game);

	return (
		<div className={theme.collection.header.base()}>
			<div className={theme.collection.header.row()}>
				{((dlcs?.length ?? 0) > 0 || hasMissable) && (
					<div className={theme.collection.header.dlc.base()}>
						{dlcs?.map((dlc) => (
							<FixedImage key={dlc.title} src={dlc.icon} alt={dlc.title} className={theme.collection.header.dlc.icon()} />
						))}
						{hasMissable && <FixedImage src={missable_logo} alt='dlc' className={theme.collection.header.missable()} />}
					</div>
				)}

				<div className={theme.collection.header.wrapper()}>
					<h2 className={theme.collection.header.title()}>{highlightText(collection.title, collection._titleMatch)}</h2>

					<span className={theme.collection.header.counter()}>
						{completed} / {total}
					</span>
				</div>

				<ProgressBar game={game} completed={completed} total={total} />
			</div>
		</div>
	);
}
