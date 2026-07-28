import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	item: {
		name: string;
	};
	game?: string;

	amount: number;
};

export function RequirementItem({ item, amount, game }: Props) {
	const theme = getTheme("questModal", game);
	return (
		<div className={theme.requirements.tag()}>
			<span className={theme.requirements.secondary()}>{item.name}</span>

			<span className={theme.requirements.primary()}>x{amount}</span>
		</div>
	);
}
