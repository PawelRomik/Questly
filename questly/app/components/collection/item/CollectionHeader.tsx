import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import FixedImage from "@/app/components/common/FixedImage";
import ProgressBar from "@/app/components/section/ProgressBar";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { DLC } from "@/app/types/quest";

type Props = {
	title: string;
	completed: number;
	total: number;
	dlcs?: DLC[];
	hasMissable: boolean;
};

export function CollectionHeader({ title, completed, dlcs, total, hasMissable }: Props) {
	const styles = useGameStyles(collectionVariants);

	return (
		<div className={styles.collection.header.base()}>
			<div className={styles.collection.header.row()}>
				{((dlcs?.length ?? 0) > 0 || hasMissable) && (
					<div className={styles.collection.header.dlc.base()}>
						{dlcs?.map((dlc) => (
							<FixedImage key={dlc.title} src={dlc.icon.url} alt={dlc.title} className={styles.collection.header.dlc.icon()} />
						))}
						{hasMissable && <p className={styles.collection.header.missable()}>MISSABLE</p>}
					</div>
				)}

				<div className={styles.collection.header.wrapper()}>
					<h2 className={styles.collection.header.title()}>{title}</h2>

					<span className={styles.collection.header.counter()}>
						{completed} / {total}
					</span>
				</div>

				<ProgressBar completed={completed} total={total} />
			</div>
		</div>
	);
}
