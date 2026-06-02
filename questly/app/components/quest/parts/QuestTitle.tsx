import FixedImage from "@/app/components/common/FixedImage";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	title: string;
	search: string;
	dlc?: {
		title: string;
		color: string;
		icon: {
			url: string;
		};
	};
};

export function QuestTitle({ title, search, dlc }: Props) {
	const styles = useGameStyles(questVariants);

	return (
		<div className={styles.content.title.wrapper()}>
			<h2 className={styles.content.title.base()}>{highlightText(title, search)}</h2>
			{dlc && <FixedImage src={dlc?.icon?.url} alt='dlc' className={styles.content.dlc()} />}
		</div>
	);
}
