import { questVariants } from "@/app/components/quest/variant/questVariants";
import { highlightText } from "@/app/lib/utils/highlightText";

type Props = {
	title: string;
	search: string;
};

export function QuestTitle({ title, search }: Props) {
	const styles = questVariants["witcher3"];
	return (
		<div className={styles.content.title.wrapper()}>
			<h2 className={styles.content.title.base()}>{highlightText(title, search)}</h2>
		</div>
	);
}
