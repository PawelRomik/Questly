import { CollectionAccent } from "@/app/components/collection/common/CollectionAccent";
import { collectionVariants } from "@/app/components/collection/variant/collectionVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	title: string;
	active: boolean;
	onClick?: () => void;
	disabled?: boolean;
};

export function CollectionGroupButton({ title, active, onClick, disabled }: Props) {
	const styles = useGameStyles(collectionVariants);

	return (
		<button onClick={onClick} disabled={disabled} className={styles.group.button(active)}>
			<CollectionAccent completed={active} />
			<span>{title}</span>
		</button>
	);
}
