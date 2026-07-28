import { CollectionAccent } from "@/app/components/collection/common/CollectionAccent";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	title: string;
	active: boolean;
	onClick?: () => void;
	disabled?: boolean;
	game?: string;
};

export function CollectionGroupButton({ title, active, onClick, disabled, game }: Props) {
	const theme = getTheme("collection", game);
	return (
		<button onClick={onClick} disabled={disabled} className={theme.group.button(active)}>
			<CollectionAccent game={game} completed={active} />
			<span>{title}</span>
		</button>
	);
}
