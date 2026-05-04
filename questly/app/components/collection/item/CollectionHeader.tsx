import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import ProgressBar from "@/app/components/quest/ProgressBar";

type Props = {
	title: string;
	completed: number;
	total: number;
};

export function CollectionHeader({ title, completed, total }: Props) {
	const styles = collectionVariants["witcher3"];

	return (
		<div className={styles.collection.header.base()}>
			<div className={styles.collection.header.row()}>
				<h2 className={styles.collection.header.title()}>{title}</h2>

				<span className={styles.collection.header.counter()}>
					{completed} / {total}
				</span>
			</div>

			<ProgressBar completed={completed} total={total} />
		</div>
	);
}
