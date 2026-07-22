import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import FixedImage from "@/app/components/common/FixedImage";
import ProgressBar from "@/app/components/section/ProgressBar";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { highlightText } from "@/app/lib/utils/highlightText";
import { CollectionWithMatches } from "@/app/types/collection";
import { DLC } from "@/app/types/quest";

type Props = {
	completed: number;
	total: number;
	dlcs?: DLC[];
	hasMissable: boolean;
	collection: CollectionWithMatches;
};

export function CollectionHeader({ collection, completed, dlcs, total, hasMissable }: Props) {
	const styles = useGameStyles(collectionVariants);
	const { missable_logo } = useGameAssets();

	return (
		<div className={styles.collection.header.base()}>
			<div className={styles.collection.header.row()}>
				{((dlcs?.length ?? 0) > 0 || hasMissable) && (
					<div className={styles.collection.header.dlc.base()}>
						{dlcs?.map((dlc) => (
							<FixedImage key={dlc.title} src={dlc.icon} alt={dlc.title} className={styles.collection.header.dlc.icon()} />
						))}
						{hasMissable && <FixedImage src={missable_logo} alt='dlc' className={styles.collection.header.missable()} />}
					</div>
				)}

				<div className={styles.collection.header.wrapper()}>
					<h2 className={styles.collection.header.title()}>{highlightText(collection.title, collection._titleMatch)}</h2>

					<span className={styles.collection.header.counter()}>
						{completed} / {total}
					</span>
				</div>

				<ProgressBar completed={completed} total={total} />
			</div>
		</div>
	);
}
