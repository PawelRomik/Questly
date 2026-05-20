import { itemVariants } from "@/app/components/item/variant/itemVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import ReactMarkdown from "react-markdown";

type Props = {
	description: string;
};

export function ItemTooltipDescription({ description }: Props) {
	const styles = useGameStyles(itemVariants);

	return (
		<div className={styles.tooltip.description()}>
			<ReactMarkdown>{description}</ReactMarkdown>
		</div>
	);
}
