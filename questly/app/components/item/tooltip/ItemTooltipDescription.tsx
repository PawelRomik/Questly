import { itemVariants } from "@/app/components/item/variant/itemVariants";
import ReactMarkdown from "react-markdown";

type Props = {
	description: string;
};

export function ItemTooltipDescription({ description }: Props) {
	const styles = itemVariants["witcher3"];

	return (
		<div className={styles.tooltip.description()}>
			<ReactMarkdown>{description}</ReactMarkdown>
		</div>
	);
}
