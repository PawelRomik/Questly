import { getTheme } from "@/app/lib/utils/getTheme";
import { useTranslations } from "next-intl";

type Props = {
	completed: boolean;
	onCompleteAll: () => void;
	onReset: () => void;
	game?: string;
};

export function CollectionButton({ completed, onCompleteAll, onReset, game }: Props) {
	const t = useTranslations("collections");
	const buttonText = completed ? t("resetBtn") : t("completeBtn");
	const theme = getTheme("collection", game);
	const onClick = completed ? onReset : onCompleteAll;

	return (
		<button onClick={onClick} className={theme.collection.button(completed)}>
			{buttonText}
		</button>
	);
}
